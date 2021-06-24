import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../../core/state/user/user.service';

@Component({
  selector: 'titan-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  showError = false;
  showSuccess = false;

  constructor(
      private http: HttpClient,
      private userService: UserService,
      public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', []],
      subject: ['', []],
      message: ['', []],
      option: ['', []]
    });
  }

  sendMessage(): void {
    if (!this.name.value || !this.email.value || !this.subject.value || !this.message.value || !this.option.value) {
      this.showError = true;
      this.showSuccess = false;
    } else {
      const token = `${this.userService.userQuery.getValue().userKey}`;
      const formData = {
        forma: 'contact',
        name : this.name.value,
        mail : this.email.value,
        subject : this.subject.value,
        message : this.message.value,
        how : this.option.value
      };
      const contactUsFormAPI = `http://181.59.120.30/tamra/admincars/emailer.php?token=${token}&forma=${formData.forma}&subject=${formData.subject}&message=${formData.message}&mail=${formData.mail}&how=${formData.how}&name=${formData.name}`;

      this.http.get(contactUsFormAPI).subscribe((data) => {});
      this.showError = false;
      this.showSuccess = true;
      this.contactUsForm.controls.name.setValue('');
      this.contactUsForm.controls.email.setValue('');
      this.contactUsForm.controls.subject.setValue('');
      this.contactUsForm.controls.message.setValue('');
      this.contactUsForm.controls.option.setValue('');
    }
  }

  get name() {
    return this.contactUsForm.get('name');
  }

  get email() {
    return this.contactUsForm.get('email');
  }

  get subject() {
    return this.contactUsForm.get('subject');
  }

  get message() {
    return this.contactUsForm.get('message');
  }

  get option() {
    return this.contactUsForm.get('option');
  }

}
