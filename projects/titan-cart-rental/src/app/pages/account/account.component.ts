import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'titan-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  view = 'default';
  accountSettingsForm: FormGroup;
  vehicleForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.accountSettingsForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmNewPassword: ['', [Validators.required]],
      currentPassword: ['', [Validators.required]],
      username: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });

    this.vehicleForm = this.fb.group({
      orderNumber: ['', [Validators.required]]
    });
  }

  changeView(view): void {
    this.view = view;
  }

}
