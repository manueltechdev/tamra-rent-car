import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Moment} from 'moment';

export interface UserState {
   userKey: string;
   ui?: UserFormSelected;
}

export interface  UserFormSelected {
  isHeaderWhite?: boolean;
  select?: string;
  bkdt?: {
    start: string,
    end: string
  };
  city?: string;
  untilHour?: string;
  fromHour?: string;
  insuranceSelected?: string;
}


export function createInitialState(): UserState {
  return {
    userKey: 'ddfaddf9f8f2d02100a66ae2572924ff7d27e4a7ca7533a3bef4fad10a0c19c7',
    ui: {
      insuranceSelected: ''
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends Store<UserState> {

  constructor() {
    super(createInitialState());
  }

}

