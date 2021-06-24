import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'titan-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpModalComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              protected ref: NbDialogRef<SignUpModalComponent>,
              private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      legalFirstName: ['', [Validators.required]],
      legalLastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  closeDialog(): void {
    this.ref.close();
  }

  closeDialogAndOpenLogin(): void {
    this.ref.close();
    this.dialogService.open(LoginComponent);
  }


}
