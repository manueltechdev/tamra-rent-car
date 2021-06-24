import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Filter, } from '../../../../core/state/filters/filter.model';
import {NbDialogService} from '@nebular/theme';
import {FiltersSelectMultipleComponent} from '../filters-select-multiple/filters-select-multiple.component';
import {FiltersSelectOneComponent} from '../filters-select-one/filters-select-one.component';

@Component({
  selector: 'titan-btn-filter',
  templateUrl: './filter-btn.component.html',
  styleUrls: ['./filter-btn.component.scss']
})
export class FilterBtnComponent implements OnChanges {
  @Input() filter: Filter;
  getChecked;
  constructor(private nbDialog: NbDialogService) { }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filter.currentValue) {
      this.getChecked = this.filter.values.filter(it => it.checked);
    }
  }

  openDialog(): void {
    if (this.filter.type === 'multiple') {
      this.nbDialog.open(FiltersSelectMultipleComponent,
        {context: {filter: this.filter}});
    } else {
      this.nbDialog.open(FiltersSelectOneComponent,
        {context: {filter: this.filter}});
    }

  }

}
