import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/state/user/user.service';
import {GetCarsService} from '../../../../core/state/cars/get-cars/get-cars.service';
import {Observable} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {getEntityType} from '@datorama/akita';
import {GetCarsState} from '../../../../core/state/cars/get-cars/get-cars.store';
import {AddonsService} from '../../../../core/state/cars/addons/addons.service';
import {Addon} from '../../../../core/state/cars/addons/addon.model';
import {environment} from '@env/environment';
import {Router} from '@angular/router';
import {Car} from '../../../../core/state/cars/get-cars/get-car.model';

@Component({
  selector: 'titan-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  actives$: Observable<Addon[]>;
  sumTotalAddons$: Observable<number>;
  carInfo$: Observable<getEntityType<GetCarsState>[]> | Observable<getEntityType<GetCarsState>> =
    this.getCarsService.getCarsQuery.selectActive();
  getInsuranceValue$: Observable<string | null>;
  urlImage: string;
  currency = 'KRW';

  constructor(private userService: UserService,
              private getCarsService: GetCarsService,
              private addonsService: AddonsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.actives$ = this.addonsService.addonsQuery.selectActive().pipe(
      switchMap(it => {
        return this.userService.userQuery.userKey$
          .pipe(
            map(key => {
              return it.map(img => {
                return {
                  ...img,
                  image: `${environment.host}/admincars/carimage.php?token=${key}&img_id=${img.image}`
                  // image: `${environment.host}/${environment.hostImg}?token=${key}&img_id=${img.image}`
                };
              });
            })
          );
      })
    );
    this.sumTotalAddons$ = this.actives$.pipe(
      map((it) => it.map(num => Number(num.isale)).reduce((curr, acc) => curr + acc))
    );

    this.getInsuranceValue$ = this.userService.userQuery.select(it => it.ui.insuranceSelected)
      .pipe(
        switchMap(it => {
          return (this.getCarsService.getCarsQuery.selectActive() as Observable<Car>)
            .pipe(
              map((car) => (car ? car[`${it}`] : null))
            );
        })
      );
      this.userService
      .userQuery.userKey$
      .pipe(
        tap(it => {
          this.urlImage = `${environment.host}/admincars/carimage.php/?token=${it}&img_id=`;
        })
      ).subscribe();
  }

  navigateToCheckout(): void {
    this.router.navigate(['checkout']);
  }

  convertString(value): number {
    return parseFloat(value);
  }
}
