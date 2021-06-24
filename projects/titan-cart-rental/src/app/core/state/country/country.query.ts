import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CountryStore, CountryState } from './country.store';

@Injectable({ providedIn: 'root' })
export class CountryQuery extends QueryEntity<CountryState> {

  constructor(protected store: CountryStore) {
    super(store);
  }

}
