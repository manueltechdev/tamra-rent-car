import { Injectable } from '@angular/core';
import {UserService} from '../../state/user/user.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '@env/environment';
import {Addon} from "../../state/cars/addons/addon.model";

export interface BookCar {
  token: string;
  id_car: string;
  pickup_date: string;
  return_date: string;
  pickup_location: string;
  return_location: string;
  order_number: string;
  payment: string;
  date_order: string;
  order_status: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: string;
  driver_license: string;
  expire_license: string;
  hotel_name: string;
  hotel_address: string;
  date_birth: string;
  international_driver_license: string;
  passport_number: string;
  date_permit_driver: string;
  resident_card: string;
  insurance_type: string;
  transaction_id: string;
  price: number;
  ivalue: number;
  country_passport: string;
  ip_cliente: string;
  addons: string | Addon[];
  acc_citycode: string;
  contac_phone: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class BookCarService {

  constructor(private userService: UserService,
              private http: HttpClient) { }

  bookingCar(order: BookCar): Observable<any> {
    const params = new HttpParams().set(
      'token', `${this.userService.userQuery.getValue().userKey}`,
    );
    return  this.http.post(`${ environment.host }/admincars/bookingcar.php`, order, { params });
  }
}


