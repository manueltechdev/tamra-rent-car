import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../../../../core/state/cars/get-cars/get-car.model';
import {Router} from '@angular/router';
import {UserService} from '../../../../core/state/user/user.service';
import {FilterBody, GetCarsService} from '../../../../core/state/cars/get-cars/get-cars.service';
import {switchMap, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {FiltersService} from '../../../../core/state/filters/filters.service';

@Component({
  selector: 'titan-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements  OnInit, OnDestroy, AfterViewInit {

  data$: Observable<Car[]>;
  loading$: Observable<boolean> = this.carsService.loading$;
  seeLess = 1;
  seeMore = 2;
  carList;
  carListToShow = [];
  allCarsList = [];
  filteredList = [];
  currency = 'KRW';
  sortBySelectedFilter = {
    name: 'sortByFilter',
    show: false,
    checked: 'relevance'
  };

  constructor(private router: Router,
              private userService: UserService,
              private carsService: GetCarsService,
              private filters: FiltersService) {
  }

  ngOnInit(): void {
    this.setDataStoreOrRouter();
    this.formatAndSendFilters();
  }

  formatAndSendFilters(): void {
   /** this.filters.filtersQuery.selectAll()
      .pipe(
        switchMap(it => {
          const filters: FilterBody[] = [
            {
              id: 0,
              values: it[0].priceRangeSelected
            },
            {
              id: 1,
             // values: it[1].values.filter(vl => vl.checked === true).map(mp => ({ id: mp.id, value: mp.value }))
            },
          ];
          return this.carsService.filterCars(filters);
        })
      ).subscribe(); **/
  }

  setDataStoreOrRouter(): void {

    this.userService.routerQuery.selectParams()
      .pipe(
        tap((param: any) => {
          if (param.select) {
            const twoPointsIndex = param.bkdt.indexOf(':');
            const start = param.bkdt.slice(0, twoPointsIndex);
            const end = param.bkdt.slice(twoPointsIndex + 1, param.bkdt.length);

            this.userService.userStore.update(state =>  ({
              ...state,
              ui: {
                ...state.ui,
                bkdt: {start, end},
                city: param.city,
                select: param.select,
                untilHour: param.until.replace('%20', ' '),
                fromHour: param.from.replace('%20', ' ')
              }
            }));
          }
        })
      ).subscribe((param) => {
          if (!this.carList) {
              const city = param.city;
              const bkdt = param.bkdt;
              this.carsService.getCars('models', bkdt, city).subscribe(data => {
                  this.carList = [];
                  this.carList = data;
                  this.setCarListToShow();
                  this.allCarsList = data;
                  this.filteredList = data;
              });
          }
    });
    // this.data$ = this.userService.userQuery.select(it => it.ui)
    //   .pipe(
    //     switchMap(it => {
    //       return this.carsService.getCars().subscribe(data => this.carList = data);
    //       // return this.carsService.getCars(/*it.select,
    //       //     `${it.bkdt.start.format('YYYY-MM-DD')}:${it.bkdt.end.format('YYYY-MM-DD')}`,
    //       //     it.city*/);
    //     })
    //   );


  }

  seeMoreCars(): any {
      if (this.carList.length > 12 && this.carListToShow.length < this.carList.length) {
          const carListLength = this.carListToShow.length;
          this.carListToShow = [];
          this.carList.forEach(car => {
              if (car && (this.carListToShow.length < (carListLength + 6))) {
                  this.carListToShow.push(car);
              }
          });
          this.seeMore++;
          this.seeLess++;
      } else {
          return;
      }
  }

  seeLessCars(): any {
    if (this.carList.length > 12) {
        if (this.seeLess > 1) {
            const carListLength = this.carListToShow.length;
            this.carListToShow = [];
            this.carList.forEach(car => {
                if (car && (this.carListToShow.length < (carListLength - 6))) {
                    this.carListToShow.push(car);
                }
            });
            this.seeLess--;
            this.seeMore--;
        }
    } else {
       return;
    }
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }

  setCarListToShow(): void {
      this.carList.forEach(car => {
          if (car && this.carListToShow.length < 12) {
              this.carListToShow.push(car);
          }
      });
  }

  applySelectedFilter(filter): void {
      if (filter.name === 'sortByFilter') {
          this.sortBySelectedFilter = filter;
          this.sortByFilter(filter);
      }
      if (filter.name === 'currencyFilter') {
          this.currency = filter.checked;
          this.sortByFilter(this.sortBySelectedFilter);
      }
      if (filter.name === 'priceFilter') {
          this.sortByPrice(filter);
      }
  }

  sortByPrice(filter): void {
      const maxPrice = this.currency === 'KRW' ? (filter.selected * 10000) : (filter.selected * 10);
      this.carListToShow = [];

      this.filteredList = this.filteredList.filter((car) => {
          return (this.currency === 'KRW' ? (car.isale[0] < maxPrice) : (car.isale[1] < maxPrice));
      });

      this.carList = this.filteredList;
      this.setCarListToShow();
  }

  sortByFilter(filter): void {
      this.carListToShow = [];
      if (filter.checked === 'relevance') {
          this.carList = this.filteredList;
          this.setCarListToShow();
      } else if (filter.checked === 'priceLow') {
          this.filteredList = this.filteredList.sort((a, b) => {
              return parseFloat((this.currency === 'KRW' ? (a.isale[0]) : (a.isale[1]))) -
                  parseFloat((this.currency === 'KRW' ? (b.isale[0]) : (b.isale[1])));
          });

          this.carList = this.filteredList;
          this.setCarListToShow();
      } else {
          this.filteredList = this.filteredList.sort((a, b) => {
              return parseFloat((this.currency === 'KRW' ? (b.isale[0]) : (b.isale[1]))) -
                  parseFloat((this.currency === 'KRW' ? (a.isale[0]) : (a.isale[1])));
          });

          this.carList = this.filteredList;
          this.setCarListToShow();
      }
  }


}
