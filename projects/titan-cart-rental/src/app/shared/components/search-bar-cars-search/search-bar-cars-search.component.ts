import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../core/state/user/user.service';
import {take, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {City} from '../../../core/state/cities/city.model';
import {CitiesService} from '../../../core/state/cities/cities.service';


@Component({
  selector: 'titan-search-bar-cars-search',
  templateUrl: './search-bar-cars-search.component.html',
  styleUrls: ['./search-bar-cars-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarCarsSearchComponent implements OnInit, AfterViewInit {
  @Input() filteredControlOptions$: Observable<City[]>;
  @Input() rangeForm: FormGroup;
  @Input() fromHours: Array<any>;
  @Input() untilHour: Array<any>;

  tomorrow = moment().add(1, 'day');

  constructor(private userService: UserService,
              private citiesService: CitiesService) {
  }


  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

    this.userService.userQuery.select(it => it)
      .pipe(
        tap(async (it) => {
          if (it.ui) {
            const activeWhere = await this.citiesService.citiesQuery.selectActive()
              .pipe(
                take(1)
              ).toPromise();
            this.rangeForm.setValue({
              where: activeWhere,
              rangeStart: moment(it.ui.bkdt.start, 'DD-MM-YYYY'),
              rangeEnd: moment(it.ui.bkdt.end, 'DD-MM-YYYY'),
              formHour: it.ui.fromHour,
              untilHour: it.ui.untilHour
            });

          }
        })
      ).subscribe();
  }


}
