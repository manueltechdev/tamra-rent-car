import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {Filter, ValuesEntity} from '../../../../core/state/filters/filter.model';
import {FiltersService} from '../../../../core/state/filters/filters.service';

@Component({
  selector: 'titan-filters-select-multiple',
  templateUrl: './filters-select-multiple.component.html',
  styleUrls: ['./filters-select-multiple.component.scss']
})
export class FiltersSelectMultipleComponent implements OnInit {
  filter: Filter;
  selected: ValuesEntity[] = [];

  constructor(protected ref: NbDialogRef<FiltersSelectMultipleComponent>,
              private filtersService: FiltersService) {
  }

  ngOnInit(): void {
    this.selected = this.filter.values.filter(it => it.checked);
  }

  toggle(filterValue: ValuesEntity, checked: boolean): void {
    if (this.selected.find(fn => fn.id === filterValue.id) && !checked) {
      const index = this.selected.indexOf(filterValue);
      this.selected.splice(index, 1);
    } else {
      this.selected.push(filterValue);
    }
  }

  closeAndSend(): void {
    this.filtersService.filtersStore.update(this.filter.id, state => ({
        ...state,
        values: this.filter.values.map(mp => (this.selected.find(it => it.id === mp.id) ? {...mp, checked: true} : {...mp, checked: false})
        )
      })
    );
    if (this.selected.length > 0) {
      this.filtersService.filtersStore.addActive([this.filter.id]);
    } else {
      this.filtersService.filtersStore.removeActive([this.filter.id]);
    }
    this.ref.close();
  }
}
