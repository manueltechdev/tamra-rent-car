import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {City} from '../../../core/state/cities/city.model';

@Component({
  selector: 'titan-search-bar-home-mobile',
  templateUrl: './search-bar-home-mobile.component.html',
  styleUrls: ['./search-bar-home-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarHomeMobileComponent implements OnInit {
  @Input() filteredControlOptions$: Observable<City[]>;
  @Input() rangeForm: FormGroup;
  @Input() fromHours: Array<any>;
  @Input() untilHour: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
