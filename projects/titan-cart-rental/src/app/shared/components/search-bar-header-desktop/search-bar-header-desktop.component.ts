import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/state/user/user.service';
import {take, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {City} from '../../../core/state/cities/city.model';
import {CitiesService} from '../../../core/state/cities/cities.service';

@Component({
  selector: 'titan-search-bar-header-desktop',
  templateUrl: './search-bar-header-desktop.component.html',
  styleUrls: ['./search-bar-header-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarHeaderDesktopComponent implements AfterViewInit, OnInit {

  @Input() filteredControlOptions$: Observable<City[]>;
  @Input() rangeForm: FormGroup;
  @Input() fromHours: Array<any>;
  @Input() untilHour: Array<any>;
  // tslint:disable-next-line:variable-name
  _rangeForm: FormGroup;

  tomorrow = moment().add(1, 'day');

  constructor(private userService: UserService,
              private citiesService: CitiesService,
              private fb: FormBuilder) {
  }


  ngOnInit(): void {
  }

  setFormValue(): void {

    this.userService.userQuery.select(it => it)
      .pipe(
        tap(async (it) => {
          if (it.ui) {
            const activeWhere = await this.citiesService.citiesQuery.selectActive()
              .pipe(
                take(1)
              ).toPromise();
            this.rangeForm.setValue({
              where: activeWhere.islocation,
              rangeStart: moment(it.ui.bkdt.start, 'DD-MM-YYYY'),
              rangeEnd: moment(it.ui.bkdt.end, 'DD-MM-YYYY'),
              formHour: it.ui.fromHour,
              untilHour: it.ui.untilHour
            });

          }
        })
      ).subscribe();
  }


  ngAfterViewInit(): void {
    this.setFormValue();
  }


}
