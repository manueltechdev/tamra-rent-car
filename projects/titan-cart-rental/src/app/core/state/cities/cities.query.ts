import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CitiesStore, CitiesState } from './cities.store';

@Injectable({ providedIn: 'root' })
export class CitiesQuery extends QueryEntity<CitiesState> {

  constructor(protected store: CitiesStore) {
    super(store);
  }

}
