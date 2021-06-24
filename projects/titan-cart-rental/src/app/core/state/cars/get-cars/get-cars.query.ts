import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GetCarsStore, GetCarsState } from './get-cars.store';

@Injectable({ providedIn: 'root' })
export class GetCarsQuery extends QueryEntity<GetCarsState> {

  constructor(protected store: GetCarsStore) {
    super(store);
  }

}
