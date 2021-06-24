import {Injectable} from '@angular/core';
import {UserQuery} from './user.query';
import {UserFormSelected, UserStore} from './user.store';
import {RouterQuery} from '@datorama/akita-ng-router-store';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public userQuery: UserQuery,
              public userStore: UserStore,
              public routerQuery: RouterQuery) {

  }

  dispatchUserValueForm(userSelected: UserFormSelected): void {
    this.userStore.update(state => ({
        ...state,
       ui: userSelected
      })
    );
  }
}
