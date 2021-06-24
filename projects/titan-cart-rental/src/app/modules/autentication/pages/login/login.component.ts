import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'titan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              protected ref: NbDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  closeDialog(): void {
    this.ref.close();
  }

}
