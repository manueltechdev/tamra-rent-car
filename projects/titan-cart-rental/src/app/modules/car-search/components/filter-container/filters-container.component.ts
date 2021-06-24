import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FiltersService} from '../../../../core/state/filters/filters.service';
import {Observable} from 'rxjs';
import {Filter} from '../../../../core/state/filters/filter.model';

@Component({
  selector: 'titan-filers-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss']
})
export class FiltersContainerComponent implements OnInit {
  @Output() applySelectedFilter = new EventEmitter<string>();

  filtersList = [
      'sortByFilter',
      'currencyFilter',
      'priceFilter',
      'seatsNumberFilter',
      'fuelFilter',
      'vehicleTypeFilter',
      'vehicleMakesFilter',
      'gpsTypeFilter',
      'gpsLanguageFilter',
      'ageRestrictionFilter',
      'idpClassFilter',
      'carFeaturesFilter'
  ];
  sortByFilter = {
    name: 'sortByFilter',
    show: false,
    checked: 'relevance',
    isAppliedFilter: true
  };
  currencyFilter = {
    name: 'currencyFilter',
    show: false,
    checked: 'KRW',
    isAppliedFilter: false
  };
  priceFilter = {
    name: 'priceFilter',
    show: false,
    selected: '',
    isAppliedFilter: false
  };
  seatsNumberFilter = {
    name: 'seatsNumberFilter',
    show: false,
    checked: '',
    isAppliedFilter: false
  };
  fuelFilter = {
    name: 'fuelFilter',
    show: false,
    checked: '',
    isAppliedFilter: false
  };
  vehicleTypeFilter = {
    name: 'vehicleTypeFilter',
    show: false,
    checked: '',
    isAppliedFilter: false
  };
  vehicleMakesFilter = {
    name: 'vehicleMakesFilter',
    show: false,
    checked: '',
    isAppliedFilter: false
  };
  gpsTypeFilter = {
    name: 'gpsTypeFilter',
    show: false,
    checked: '',
    isAppliedFilter: false
  };
  gpsLanguageFilter = {
    name: 'gpsLanguageFilter',
    show: false,
    checked: '',
    isAppliedFilter: false
  };
  ageRestrictionFilter = {
    name: 'ageRestrictionFilter',
    show: false,
    checked: '',
    isAppliedFilter: false
  };
  idpClassFilter = {
    name: 'idpClassFilter',
    show: false,
    checked: '',
    isAppliedFilter: false
  };
  carFeaturesFilter = {
    name: 'carFeaturesFilter',
    show: false,
    checked: '',
    isAppliedFilter: false
  };

  priceMin = '₩10000';
  priceMax = '₩30000';

  // filters$: Observable<Filter[]> = this.filtersService.filtersQuery.selectAll();
  // filters;
  // constructor(private filtersService: FiltersService) { }
  constructor() { }

  ngOnInit(): void {
    this.setSlider();
    // this.filtersService.get()
    //   .subscribe((data) => console.log(data));
    //
    // this.filtersService.filtersQuery.selectAll().subscribe(data => console.log(data));
  }

  openFilter(filter): void {
    this.filtersList.forEach(filt => {
      if (filt !== filter) {
        this[filt].show = false;
      }
    });
    this[filter].show = !this[filter].show;
  }

  closeFilter(filter): void {
    this[filter].show = false;
  }

  applyFilter(filter): void {
    this.applySelectedFilter.emit(this[filter]);
    this[filter].isAppliedFilter = true;
    if (this[filter].name === 'currencyFilter') {
      this.priceMin = this.currencyFilter.checked === 'KRW' ? '₩10000' : '$10';
      const slider: any = document.getElementById('price-slider');
      if (this.currencyFilter.checked === 'KRW') {
        this.priceMax = '₩' + slider.value * 10000;
      } else {
        this.priceMax = '$' + slider.value * 10;
      }
    }
    this.closeFilter(filter);
  }

  setSlider(): void {
    const slider: any = document.getElementById('price-slider');
    document.getElementById('price-slider').style.background =
        'linear-gradient(to right, #E54300 0%, #E54300 ' +
        (slider.value - slider.min) / (slider.max - slider.min) * 100 + '%, #fff ' + slider.value + '%, white 100%)';
  }

  updateTextInput(input): void {
    if (this.currencyFilter.checked === 'KRW') {
      this.priceMax = '₩' + input.target.value * 10000;
    } else {
      this.priceMax = '$' + input.target.value * 10;
    }
    const slider: any = document.getElementById('price-slider');
    slider.value = input.target.value;
    this.priceFilter.selected = input.target.value;
    slider.style.background = 'linear-gradient(to right, #E54300 0%, #E54300 ' +
        (slider.value - slider.min) / (slider.max - slider.min) * 100 + '%, #fff ' +
        slider.value + '%, white 100%)';
  }

}
