import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    NbLayoutModule, NbListModule, NbMenuModule, NbAccordionModule
} from '@nebular/theme';
import {NbMomentDateModule, NbMomentDateService} from '@nebular/moment';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import { SearchBarHomeMobileComponent } from './components/search-bar-home-mobile/search-bar-home-mobile.component';
import { SearchBarHomeDesktopComponent } from './components/search-bar-home-desktop/search-bar-home-desktop.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarHeaderMobileComponent } from './components/search-bar-header-mobile/search-bar-header-mobile.component';
import { SearchBarHeaderDesktopComponent } from './components/search-bar-header-desktop/search-bar-header-desktop.component';
import { HeaderHomeMenuComponent } from './components/header-home-menu/header-home-menu.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchBarCarsSearchComponent } from './components/search-bar-cars-search/search-bar-cars-search.component';
import { HeaderHomeCarsSearchComponent } from './components/header-home-cars-search/header-home-cars-search.component';
import {AutenticationModule} from '../modules/autentication/autentication.module';
import { PaypalBtnComponent } from './components/paypal-btn/paypal-btn.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { TopDestinationsComponent } from './components/top-destinations/top-destinations.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import { BenefitsModalComponent } from './components/benefits-modal/benefits-modal.component';
import { SeoulModalComponent } from './components/seoul-modal/seoul-modal.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    SearchBarHomeMobileComponent,
    SearchBarHomeDesktopComponent,
    HeaderComponent,
    SearchBarHeaderMobileComponent,
    SearchBarHeaderDesktopComponent,
    HeaderHomeMenuComponent,
    CarouselComponent,
    SearchBarCarsSearchComponent,
    HeaderHomeCarsSearchComponent,
    BenefitsComponent,
    PaypalBtnComponent,
    TopDestinationsComponent,
    FooterComponent,
    BenefitsModalComponent,
    SeoulModalComponent
  ],
    exports: [
        HeaderComponent,
        SearchBarComponent,
        CarouselComponent,
        BenefitsComponent,
        PaypalBtnComponent,
        TopDestinationsComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NbDatepickerModule,
        NbMomentDateModule,
        NbInputModule,
        NbSelectModule,
        NbAutocompleteModule,
        NbButtonModule,
        NbEvaIconsModule,
        NbIconModule,
        NbCardModule,
        NbFormFieldModule,
        NbLayoutModule,
        FormsModule,
        NbListModule,
        AutenticationModule,
        NbMenuModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatMomentDateModule,
        RouterModule,
        NbAccordionModule
    ]
})
export class SharedModule { }
