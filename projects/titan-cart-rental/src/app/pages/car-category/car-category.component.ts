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
import {ActivatedRoute, Route, Router} from '@angular/router';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'titan-car-category',
  templateUrl: './car-category.component.html',
  styleUrls: ['./car-category.component.scss']
})
export class CarCategoryComponent implements OnInit {
  byCategoryData = [];
  carCategory;
  bySelectedCategoryData = [];

  constructor(
      private cd: ChangeDetectorRef,
      private http: HttpClient,
      private userService: UserService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getByCategoryData();

    this.carCategory = this.route.snapshot.paramMap.get('category');
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

  redirectTo(uri: string): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
        this.router.navigate([uri]));
  }

  goToProductDetails(category): void {
    this.redirectTo(`/car-category/${category}`);
  }

}
