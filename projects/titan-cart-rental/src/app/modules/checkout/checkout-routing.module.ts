import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutComponent} from './checkout.component';
import {CheckoutFormComponent} from './pages/checkout-form/checkout-form.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: '',
        component: CheckoutFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
