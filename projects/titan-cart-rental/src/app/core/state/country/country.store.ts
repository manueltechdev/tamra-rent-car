import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CountryState extends EntityState<Country> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'country', idKey: 'cocode' })
export class CountryStore extends EntityStore<CountryState> {

  constructor() {
    super();
  }

}

