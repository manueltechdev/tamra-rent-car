import { Injectable } from '@angular/core';
import { AddonsStore, AddonsState } from './addons.store';
import {NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {applyTransaction, transaction} from '@datorama/akita';
import {UserQuery} from '../../user/user.query';
import {Addon} from './addon.model';
import {AddonsQuery} from './addons.query';
@NgEntityServiceConfig({
  resourceName: 'admincars/carlist.php',
})
@Injectable({ providedIn: 'root', })
export class AddonsService extends NgEntityService<AddonsState> {

  constructor(public store: AddonsStore,
              public userQuery: UserQuery,
              public addonsQuery: AddonsQuery) {
    super(store);
  }

  getCars(select = 'addons' ): Observable<Addon[]> {
    this.store.setLoading(true);
    const params = new HttpParams().set(
      'token', `${ this.userQuery.getValue().userKey }`,
    ).set('select', select);

    return this.get<Addon[]>('', {params})
      .pipe(
        tap(it => {
          applyTransaction(() => {
            this.store.setLoading(false);
            this.store.set([...it]); // todo we cannot set params without id, that is the reason for what we do that
          });
        })
      );
  }
  setActiveAndToggle(id: string): void {
    applyTransaction(() => {
      this.store.addActive(id);
      this.store.update(id, state => ({
        ...state,
        added: !state.added
      }));
    });
}

  deactivateAndToggle(id: string): void {
    applyTransaction(() => {
      this.store.removeActive(id);
      this.store.update(id, state => ({
      ...state,
      added: !state.added
    }));
    });
  }

}
