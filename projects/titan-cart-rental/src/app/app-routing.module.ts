import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {FaqHelpCenterComponent} from './pages/faq-help-center/faq-help-center.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {AccountComponent} from './pages/account/account.component';
import {AppComponent} from './app.component';
import { BookedTripComponent } from './pages/booked-trip/booked-trip.component';
import { CarCategoryComponent } from './pages/car-category/car-category.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    path: 'cars-search',
    loadChildren: () => import('./modules/car-search/car-search.module').then(m => m.CarSearchModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'help-center',
    component: FaqHelpCenterComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'booked-trip',
    component: BookedTripComponent
  },
  {
    path: 'car-category/:category',
    component: CarCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
