import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AddonsStore, AddonsState } from './addons.store';
import {Observable} from 'rxjs';
import {Addon} from './addon.model';

@Injectable({ providedIn: 'root' })
export class AddonsQuery extends QueryEntity<AddonsState> {

  actives$ = this.selectActive() as Observable<Addon[]>;
  constructor(protected store: AddonsStore) {
    super(store);
  }

}
