import {Injectable} from '@angular/core';
import {GetCarsStore, GetCarsState} from './get-cars.store';
import {NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import {UserQuery} from '../../user/user.query';
import {HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Car} from './get-car.model';
import {Observable} from 'rxjs';
import {RouterQuery} from '@datorama/akita-ng-router-store';
import {applyTransaction} from '@datorama/akita';
import {GetCarsQuery} from './get-cars.query';


export interface FilterBody {
  id: number;
  values?: (ValuesEntity)[] | null;
}

export interface ValuesEntity {
  id: number;
  value: number;
}


@NgEntityServiceConfig({
  resourceName: 'admincars/carlist.php',
})
@Injectable({providedIn: 'root'})
export class GetCarsService extends NgEntityService<GetCarsState> {

  loading$ = this.getCarsQuery.selectLoading();

  constructor(public store: GetCarsStore,
              public userQuery: UserQuery,
              public getCarsQuery: GetCarsQuery) {
    super(store);
  }

  getCars(select = 'models', bkdt = '2020-01-01:2020-02-03', city = 'Gwangju'): Observable<Car[]> {
    this.store.setLoading(true);
    const params = new HttpParams().set(
      'token', `${this.userQuery.getValue().userKey}`,
    ).set('select', select)
      .set('bkdt', bkdt)
      .set('city', city);

    return this.get<Car[]>('', {params})
      .pipe(
        tap(it => {
          applyTransaction(() => {
            this.store.setLoading(false);
            this.store.set(it); // todo we cannot set params without id, that is the reason for what we do that
          });
        })
      );
  }

  filterCars(filters: FilterBody[], select = 'models', bkdt = '2020-01-01:2020-02-03', city = 'Gwangju'): void {
    this.store.setLoading(true);
    const params = new HttpParams().set(
      'token', `${this.userQuery.getValue().userKey}`,
    ).set('select', select)
      .set('bkdt', bkdt)
      .set('city', city);

    this.getHttp().post(this.getConfig().baseUrl, [...filters], { params });
  }


}
