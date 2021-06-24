import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FiltersStore, FiltersState } from './filters.store';

@Injectable({ providedIn: 'root' })
export class FiltersQuery extends QueryEntity<FiltersState> {

  constructor(protected store: FiltersStore) {
    super(store);
  }

}
