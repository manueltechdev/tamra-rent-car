import { Injectable } from '@angular/core';
import {Filter} from './filter.model';
import {EntityState, EntityStore, MultiActiveState, StoreConfig} from '@datorama/akita';

export interface FiltersState extends EntityState<Filter>, MultiActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'filters', idKey: 'id'  })
export class FiltersStore extends EntityStore<FiltersState> {


  constructor() {
    super({active: []});
  }

}

