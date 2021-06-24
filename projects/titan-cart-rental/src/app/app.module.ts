import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from './shared/shared.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { FaqHelpCenterComponent } from './pages/faq-help-center/faq-help-center.component';
import { BookedTripComponent } from './pages/booked-trip/booked-trip.component';
import {
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbListModule,
  NbMenuModule,
  NbThemeModule,
  NbLayoutModule,
  NbAccordionModule
} from '@nebular/theme';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AccountComponent } from './pages/account/account.component';
import { CarCategoryComponent } from './pages/car-category/car-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    FaqHelpCenterComponent,
    AboutUsComponent,
    AccountComponent,
    BookedTripComponent,
    CarCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    NbLayoutModule,
    NbAccordionModule,
    NbCardModule,
    NbInputModule,
    NbAutocompleteModule,
    NbButtonModule,
    NbDatepickerModule,
    NbDialogModule,
    NbFormFieldModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
    NbMenuModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    NbThemeModule.forRoot({name: 'template'})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
