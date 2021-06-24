import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FiltersStore} from './filters.store';
import {Filter} from './filter.model';
import {switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {FiltersQuery} from './filters.query';
import {UserQuery} from '../user/user.query';

export interface FilterBack {
  Price: PriceOrNumber;
  ['Number of seats']: PriceOrNumber;
  ['Fuel type']: PriceOrNumber;
  ['GPS types']: PriceOrNumber;
  ['GPS language']: PriceOrNumber;
  ['AGE restriction']: PriceOrNumber;
  ['IDP Class: IDP Class']: PriceOrNumber;
}

export interface PriceOrNumber {
  id: number;
  name: string;
  values?: (ValuesEntity)[] | null;
}

export interface ValuesEntity {
  id: number;
  value: string;
}


@Injectable({providedIn: 'root'})
export class FiltersService {

  constructor(public filtersStore: FiltersStore,
              private http: HttpClient,
              public filtersQuery: FiltersQuery,
              public userQuery: UserQuery) {
  }

  get(): Observable<any> {

    return this.userQuery.userKey$
      .pipe(
        switchMap(it => {
          const params = new HttpParams().set(
            'token', `${it}`,
          ).set('select', `filter`);
          return this.http.get<FilterBack>(`${environment.host}/admincars/carlist.php`, {params}).pipe(
            tap(entities => {
              const arrayObject: Filter[] = [];
              for (const key of Object.keys(entities)) {
                arrayObject.push(entities[key]);
              }
              this.filtersStore.set(arrayObject);
            }));
        })
      );
  }
}
