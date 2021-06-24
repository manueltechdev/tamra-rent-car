import { ChangeDetectionStrategy,
  ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserService} from '../../core/state/user/user.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
import {Router} from '@angular/router';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'titan-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, DoCheck {
  byCategoryData = [];
  byPopularityData = [];

  constructor(
      private cd: ChangeDetectorRef,
      private http: HttpClient,
      private userService: UserService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.getByCategoryData();
    this.getByPopularityData();
  }

  getByCategoryData(): void {
    const token = `${this.userService.userQuery.getValue().userKey}`;
    const params = new HttpParams().set(
        'token', token,
    ).set('select', 'types');
    const carTypesAPI = `http://181.59.120.30/tamra/admincars/carlist.php`;
    this.http.get(carTypesAPI, {params}).subscribe((data: any) => {
      data.forEach(carType => {
        carType.imageSrc = `http://181.59.120.30/tamra/admincars/carimage.php/?token=${token}&img_id=${carType.timage}`;
        this.byCategoryData.push(carType);
      });
    });
  }

  getByPopularityData(): void {
    const token = `${this.userService.userQuery.getValue().userKey}`;
    const params = new HttpParams().set(
        'token', token,
    ).set('select', 'popular');
    const carTypesAPI = `http://181.59.120.30/tamra/admincars/carlist.php`;
    this.http.get(carTypesAPI, {params}).subscribe((data: any) => {
      console.log(data);
      data.forEach(carType => {
        carType.imageSrc = `http://181.59.120.30/tamra/admincars/carimage.php/?token=${token}&img_id=${carType.image}`;
        this.byPopularityData.push(carType);
      });
    });
  }

  ngDoCheck(): void {
    this.cd.markForCheck();
  }

  goToProductDetails(category): void {
    this.router.navigate(['/car-category', category]);
  }

}
