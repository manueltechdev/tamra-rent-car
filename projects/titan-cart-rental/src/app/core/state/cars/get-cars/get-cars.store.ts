import { Injectable } from '@angular/core';
import { Car } from './get-car.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface GetCarsState extends EntityState<Car> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'getCars', idKey: 'itemid' })
export class GetCarsStore extends EntityStore<GetCarsState> {

  constructor() {
    super();
  }

}

