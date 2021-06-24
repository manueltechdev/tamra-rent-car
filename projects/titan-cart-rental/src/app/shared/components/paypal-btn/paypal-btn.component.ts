import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {FormCheckoutValue} from "../../../core/interfaces/form-checkout-value";
import {GetCarsService} from "../../../core/state/cars/get-cars/get-cars.service";
import {BookCar, BookCarService} from "../../../core/http/book-car/book-car.service";
import {AddonsService} from "../../../core/state/cars/addons/addons.service";
import {catchError, take, tap} from "rxjs/operators";
import {UserService} from "../../../core/state/user/user.service";
import * as moment from 'moment';
import {PaypalOrder} from "../../../core/interfaces/paypal-order";
import {throwError} from "rxjs";

declare var paypal;


@Component({
  selector: 'titan-paypal-btn',
  templateUrl: './paypal-btn.component.html',
  styleUrls: ['./paypal-btn.component.scss'],
})
export class PaypalBtnComponent implements OnChanges {
  @ViewChild('paypal', {static: false}) paypalElement: ElementRef;
  @Input() description: string;
  @Input() price: number;
  @Input() btnVisible: boolean;
  @Input() formValue: FormCheckoutValue;

  constructor(private getCarsService: GetCarsService,
              private bookCarService: BookCarService,
              private userService: UserService,
              private addonsService: AddonsService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.btnVisible ? changes.btnVisible.currentValue : false) {
      setTimeout(() => {
        paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.description,
                  amount: {
                    value: this.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(JSON.stringify(order));
            console.log(order);
            await this.fillData(order);
          },
          onError: err => {
            console.error(err);
          },
          onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
          },
        }).render(this.paypalElement.nativeElement);
      }, 0);
    }
  }

  async fillData(paypalOrder: PaypalOrder): Promise<void> {
    const bookCar: BookCar = {
      acc_citycode: this.formValue.country,
      addons: await this.addonsService.addonsQuery.actives$.pipe(take(1)).toPromise(),
      country: this.formValue.country,
      contac_phone: this.formValue.phoneWhatsApp,
      email: this.formValue.username,
      country_passport: this.formValue.country,
      date_birth: this.formValue.dateOfBirth.format('DD-MM-YYYY'),
      date_order: moment().format('DD-MM-YYYY'),
      first_name: this.formValue.fullName,
      token: this.userService.userQuery.getValue().userKey,
      date_permit_driver: '',
      id_car: this.getCarsService.getCarsQuery.getActiveId(),
      hotel_name: this.formValue.hotel,
      driver_license: this.formValue.koreanLicence,
      expire_license: this.formValue.expirationDate.format('DD-MM-YYYY'),
      hotel_address: this.formValue.hotel,
      insurance_type: this.userService.userQuery.getValue().ui.insuranceSelected,
      international_driver_license: this.formValue.internationalDriving,
      ip_cliente: '',
      ivalue: this.price,
      last_name: this.formValue.fullName,
      order_number: paypalOrder.id,
      order_status: paypalOrder.status,
      passport_number: this.formValue.passportOrKoreanCard,
      password: this.formValue.accountPassword,
      price: this.price,
      phone_number: this.formValue.phoneWhatsApp,
      resident_card: this.formValue.permanentResident,
      transaction_id: paypalOrder.id,
      pickup_date: this.userService.userQuery.getValue().ui.bkdt.start,
      return_date: this.userService.userQuery.getValue().ui.bkdt.end,
      pickup_location: this.userService.userQuery.getValue().ui.city,
      return_location: this.userService.userQuery.getValue().ui.city,
      payment: 'paypal'
    };
    this.bookCarService.bookingCar(bookCar)
      .pipe(
        tap(it => alert('Transacción guardada en la db.')),
        catchError(err => {
          alert('Ocurrió un problema en el servidor, intenta nuevamente mas tarde');
          return throwError(err);
        })
      )
      .subscribe();
  }


}
