import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarSearchRoutingModule } from './car-search-routing.module';
import { CarSearchComponent } from './car-search.component';
import { CardCarComponent } from './components/card-car/card-car.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardCarSkeletonComponent } from './components/card-car-skeleton/card-car-skeleton.component';
import {
    NbBadgeModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbRadioModule,
    NbLayoutModule
} from '@nebular/theme';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { CarGalleryComponent } from './components/car-gallery/car-gallery.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import {SharedModule} from '../../shared/shared.module';
import { CarDetailAddonsComponent } from './components/car-detail-addons/car-detail-addons.component';
import { CarDetailInsuranceComponent } from './components/car-detail-insurance/car-detail-insurance.component';
import { FiltersContainerComponent } from './components/filter-container/filters-container.component';
import { FilterBtnComponent } from './components/filter-btn/filter-btn.component';
import { FiltersSelectMultipleComponent } from './components/filters-select-multiple/filters-select-multiple.component';
import { FiltersSelectOneComponent } from './components/filters-select-one/filters-select-one.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CarSearchComponent,
    CardCarComponent,
    CardCarSkeletonComponent,
    CarDetailComponent,
    CarGalleryComponent,
    CarListComponent,
    CarDetailAddonsComponent,
    CarDetailInsuranceComponent,
    FiltersContainerComponent,
    FilterBtnComponent,
    FiltersSelectMultipleComponent,
    FiltersSelectOneComponent],
  imports: [
    CommonModule,
    CarSearchRoutingModule,
    NgxSkeletonLoaderModule,
    NbCardModule,
    NbButtonModule,
    SharedModule,
    NbIconModule,
    NbListModule,
    NbRadioModule,
    NbBadgeModule,
    NbCheckboxModule,
    NbInputModule,
    ReactiveFormsModule,
    NbLayoutModule
  ]
})
export class CarSearchModule { }
