import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CountryStore} from './country.store';
import {Country} from './country.model';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {UserQuery} from '../user/user.query';
import {CountryQuery} from './country.query';

@Injectable({providedIn: 'root'})
export class CountryService {

  constructor(private countryStore: CountryStore,
              private http: HttpClient,
              public countryQuery: CountryQuery,
              private userQuery: UserQuery) {
  }

  get(): Observable<Country[]> {
    this.countryStore.setLoading(true);
    const params = new HttpParams()
      .set('token', `${this.userQuery.getValue().userKey}`)
      .set('select', `country`);
    return this.http.get<Country[]>(`${environment.host}/admincars/extrainfo.php`, {params})
      .pipe(
        tap(entities => {
          this.countryStore.setLoading(false);
          this.countryStore.set(entities);
        })
      );
  }
}
