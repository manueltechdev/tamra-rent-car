import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbInputModule} from '@nebular/theme';
import { SignUpModalComponent } from './pages/sign-up-modal/sign-up-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { OpenModalMiddlemanComponent } from './components/open-modal-middleman/open-modal-middleman.component';

@NgModule({
  declarations: [SignUpModalComponent, LoginComponent, OpenModalMiddlemanComponent],
  imports: [
    CommonModule,
    NbDialogModule.forChild(),
    NbCardModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbInputModule,
    NbCheckboxModule
  ],
  exports: [SignUpModalComponent, LoginComponent]
})

export class AutenticationModule { }
