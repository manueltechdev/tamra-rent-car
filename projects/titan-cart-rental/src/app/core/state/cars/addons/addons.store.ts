import { Injectable } from '@angular/core';
import { Addon } from './addon.model';
import {EntityState, EntityStore, MultiActiveState, StoreConfig} from '@datorama/akita';

export interface AddonsState extends EntityState<Addon>, MultiActiveState {}

const initialState = {
  active: []
};
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'addons', idKey: 'itemid' })
export class AddonsStore extends EntityStore<AddonsState> {

  constructor() {
    super(initialState);
  }

}

