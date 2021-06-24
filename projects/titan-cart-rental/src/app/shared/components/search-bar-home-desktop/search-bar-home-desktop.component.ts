import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NbDateService} from '@nebular/theme';
import {Moment} from 'moment';
import * as moment from 'moment';
import {City} from '../../../core/state/cities/city.model';

@Component({
  selector: 'titan-search-bar-home-desktop',
  templateUrl: './search-bar-home-desktop.component.html',
  styleUrls: ['./search-bar-home-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarHomeDesktopComponent implements OnInit, AfterViewInit {
   @Input() filteredControlOptions$: Observable<City[]>;
   @Input() rangeForm: FormGroup;
   @Input() fromHours: Array<any>;
   @Input() untilHour: Array<any>;
   tomorrow = moment().add(1, 'day');
  constructor(private router: Router,
              public dateService: NbDateService<Moment>) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
/*    this.rangeForm.get('range').setValue({start: moment(), end: moment().add(1, 'day')});
    let isStart = true;
    this.dateService.compareDates = (date1: Moment, date2: unknown) => {
      let inputVal: Moment;
      if (isStart) {
        inputVal = (date2 as { start: Moment; end: Moment }).start;
        isStart = false;
      } else {
        inputVal = (date2 as { start: Moment; end: Moment }).end;
        isStart = true;
      }
      return date1 === inputVal ? 0 : date1 > inputVal ? 1 : -1;
    };
    this.tomorrow = this.dateService.createDate(2020, 9, 18);*/

  }


}
