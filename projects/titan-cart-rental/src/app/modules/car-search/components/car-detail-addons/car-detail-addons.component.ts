import { Component, OnInit } from '@angular/core';
import {AddonsService} from '../../../../core/state/cars/addons/addons.service';
import { Observable } from 'rxjs';
import {Addon} from '../../../../core/state/cars/addons/addon.model';
import {map, switchMap} from 'rxjs/operators';
import {environment} from '@env/environment';
import {UserService} from '../../../../core/state/user/user.service';


@Component({
  selector: 'titan-car-detail-addons',
  templateUrl: './car-detail-addons.component.html',
  styleUrls: ['./car-detail-addons.component.scss']
})
export class CarDetailAddonsComponent implements OnInit {
  addons$: Observable<Addon[]> = this.addons.addonsQuery.selectAll()
    .pipe(
      switchMap(it => {
        return this.usersService.userQuery.userKey$
          .pipe(
            map(key => {
              return it.map(img => {
                return {...img,
                  image: `${ environment.host }/admincars/carimage.php?token=${ key }&img_id=${img.image}` };
              });
            })
          );
      })
    );
  constructor(private addons: AddonsService,
              private usersService: UserService) { }

  ngOnInit(): void {
  this.addons.getCars()
    .subscribe();
  }

  updateEntity(addon: Addon): void {
    this.addons.setActiveAndToggle(addon.itemid);
  }

  removeEntity(addon: Addon): void {
    this.addons.deactivateAndToggle(addon.itemid);
  }
}
