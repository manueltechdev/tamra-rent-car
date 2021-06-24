import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Filter} from '../../../../core/state/filters/filter.model';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FiltersService} from '../../../../core/state/filters/filters.service';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'titan-filters-select-one',
  templateUrl: './filters-select-one.component.html',
  styleUrls: ['./filters-select-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersSelectOneComponent implements OnInit {
  form: FormGroup;
  @Input() filter: Filter;

  constructor(private fb: FormBuilder,
              private filterService: FiltersService,
              private ref: NbDialogRef<FiltersSelectOneComponent>) {
    this.createForm();


  }

  get max(): AbstractControl {
    return this.form.controls.max;
  }

  get min(): AbstractControl {
    return this.form.controls.min;
  }

  ngOnInit(): void {
    if (this.filter.priceRangeSelected) {
      this.max.setValue(this.filter.priceRangeSelected[1].value);
      this.min.setValue(this.filter.priceRangeSelected[0].value);
    }
    this.setValidators(Number(this.filter.values[1]?.value), Number(this.filter.values[0]?.value));
    this.listenChangesAndUpdateValidators();

  }

  listenChangesAndUpdateValidators(): void {
    this.max
      .valueChanges
      .subscribe(it => {
        this.setValidators(Number(it), null);
        this.form.updateValueAndValidity();

      });

    this.min
      .valueChanges
      .subscribe(it => {
        this.setValidators(null, Number(it));
        this.form.updateValueAndValidity();
      });
  }

  setValidators(minValueMax, maxValueMin): void {
    if (minValueMax || minValueMax === 0) {
      this.min.setValidators([Validators.required,
        Validators.maxLength(this.filter.values[0]?.value.length - 3),
        Validators.min(Number(this.filter.values[0]?.value)),
        Validators.max(minValueMax)]);
      this.min.updateValueAndValidity({onlySelf: true, emitEvent: false});
    }
    if (maxValueMin || maxValueMin === 0) {
      this.max.setValidators([
        Validators.required,
        Validators.min(maxValueMin),
        Validators.maxLength(this.filter.values[1]?.value.length - 3),
        Validators.max(Number(this.filter.values[1]?.value))]);
      this.max.updateValueAndValidity({onlySelf: true, emitEvent: false});

    }


  }


  createForm(): void {
    this.form = this.fb.group({
      min: [''],
      max: ['']
    });
  }

  closeAndSend(): void {
    this.filterService.filtersStore.update(this.filter.id, state =>
      (
        {
          ...state,
          priceRangeSelected: [
            {
              id: this.filter.values[0].id,
              value: this.min.value
            },
            {
              id: this.filter.values[1].id,
              value: this.max.value
            }
          ]
        }
      )
    );
    this.ref.close();
  }


}
