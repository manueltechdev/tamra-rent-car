import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/state/user/user.service';
import {GetCarsService} from '../../../../core/state/cars/get-cars/get-cars.service';
import {Observable} from 'rxjs';
import {Car} from '../../../../core/state/cars/get-cars/get-car.model';
import {map, share, tap} from 'rxjs/operators';

@Component({
  selector: 'titan-car-detail-insurance',
  templateUrl: './car-detail-insurance.component.html',
  styleUrls: ['./car-detail-insurance.component.scss']
})
export class CarDetailInsuranceComponent implements OnInit {

  insurance$: Observable<any>;
  userService$: Observable<any>;

  constructor(private userService: UserService,
              private getCarsService: GetCarsService) {
  }

  ngOnInit(): void {
    this.initObs();
  }

  initObs(): void {

    this.userService$ = this.userService.userQuery.select(it => it.ui)
      .pipe(
        tap(console.log),
        share()
      );
    this.insurance$ = (this.getCarsService.getCarsQuery.selectActive() as Observable<Car>)
      .pipe(
        map(it => (
          [{
            insurb: it.insurb,
            title: "Basic Insurance",
            excess: ' 500,00 KRW + loss of business charges.',
            coverage: ' Does not include rims and tires, side mirrors, keys and road-side assistance.'
          },
            {
              insurf: it.insurf,
              title: "Full Insurance",
              excess: ' 0 KRW.',
              coverage: ' Does not include rims and tires, side mirrors, keys and road-side assistance.'
            }]
        ))
      );
  }


  change(object): void {
    const arrKeys = Object.keys(object);
    this.userService.userStore.update(state => ({
        ...state,
        ui: {
          ...state.ui,
          insuranceSelected: arrKeys.filter(str => str === 'insurf')[0]
        }
      })
    );

  }
}
