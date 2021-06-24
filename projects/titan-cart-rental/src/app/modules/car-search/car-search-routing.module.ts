import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarSearchComponent} from './car-search.component';
import {CarDetailComponent} from './pages/car-detail/car-detail.component';
import {CarListComponent} from './pages/car-list/car-list.component';

const routes: Routes = [
  {
    path: ':city/:select/:bkdt/:from/:until',
    component: CarSearchComponent,
    children: [
      {
        path: '',
        component: CarListComponent,
      },
      {
        path: 'car-detail/:id',
        component: CarDetailComponent,
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarSearchRoutingModule { }
