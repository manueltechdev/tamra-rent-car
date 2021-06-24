import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {UserState, UserStore} from './user.store';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import {combineLatest, Observable} from 'rxjs';
import {GetCarsQuery} from '../cars/get-cars/get-cars.query';
import {Car} from '../cars/get-cars/get-car.model';

export interface CarsFee {
  days: number;
  subtotal: number;
  rate: string;
}

@Injectable({providedIn: 'root'})
export class UserQuery extends Query<UserState> {
  userKey$ = this.select(it => it.userKey);
  countDays$: Observable<number> = this.select(it => it.ui.bkdt)
    .pipe(
      map(it => moment(it.end, 'DD-MM-YYYY').diff(moment(it.start, 'DD-MM-YYYY'), 'days'))
    );

  subtotalCarRentDaysFee$: Observable<CarsFee[]> = combineLatest([this.countDays$, (this.getCarsQuery.selectActive() as Observable<Car>)])
    .pipe(
      map(([daysOff, activeEntity]) => {
        return [{
          days: daysOff,
          subtotal: Number(activeEntity.isale) * daysOff,
          rate: activeEntity.isale
        }];
      })
    );

  constructor(protected store: UserStore,
              private getCarsQuery: GetCarsQuery) {
    super(store);
  }

}
