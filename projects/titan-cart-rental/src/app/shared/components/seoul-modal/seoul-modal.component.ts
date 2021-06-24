import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/state/user/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'titan-seoul-modal',
  templateUrl: './seoul-modal.component.html',
  styleUrls: ['./seoul-modal.component.scss']
})
export class SeoulModalComponent implements OnInit {
  seoulForm: FormGroup;
  showError = false;
  showSuccess = false;
  fromHours = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];

  constructor(
      protected dialogRef: NbDialogRef<SeoulModalComponent>,
      public fb: FormBuilder,
      private userService: UserService,
      private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.seoulForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', []],
      comments: ['', []],
      fromHour: ['', []],
      rangeStart: ['', []],
      tillHour: ['', []],
      rangeEnd: ['', []]
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  sendMessage(): void {
    if (!this.email.value || !this.phone.value || !this.comments.value) {
      this.showError = true;
      this.showSuccess = false;
    } else {
      const token = `${this.userService.userQuery.getValue().userKey}`;
      const formData = {
        forma: 'seoul',
        phone : this.phone.value,
        mail : this.email.value,
        comments : this.comments.value,
        startdt : this.seoulForm.get('rangeStart').value ? this.seoulForm.get('rangeStart').value.format('DD-MM-YYYY') : '',
        starttm : this.seoulForm.get('fromHour').value,
        enddt : this.seoulForm.get('rangeEnd').value ? this.seoulForm.get('rangeEnd').value.format('DD-MM-YYYY') : '',
        endtm : this.seoulForm.get('tillHour').value
      };

      const seoulFormAPI = `http://181.59.120.30/tamra/admincars/emailer.php?token=${token}&forma=${formData.forma}&phone=${formData.phone}&comments=${formData.comments}&mail=${formData.mail}&startdt=${formData.startdt}&starttm=${formData.starttm}&enddt=${formData.enddt}&endtm=${formData.endtm}`;

      this.http.get(seoulFormAPI).subscribe((data) => {});
      this.showError = false;
      this.showSuccess = true;
      this.seoulForm.controls.phone.setValue('');
      this.seoulForm.controls.email.setValue('');
      this.seoulForm.controls.comments.setValue('');
      this.seoulForm.controls.rangeStart.setValue('');
      this.seoulForm.controls.fromHour.setValue('');
      this.seoulForm.controls.rangeEnd.setValue('');
      this.seoulForm.controls.tillHour.setValue('');
    }
  }

  get phone(): any {
    return this.seoulForm.get('phone');
  }

  get email(): any {
    return this.seoulForm.get('email');
  }

  get comments(): any {
    return this.seoulForm.get('comments');
  }

  get rangeStart(): any {
    return this.seoulForm.get('rangeStart');
  }

  get rangeEnd(): any {
    return this.seoulForm.get('rangeStart');
  }

  get fromHour(): any {
    return this.seoulForm.get('formHour');
  }

  get tillHour(): any {
    return this.seoulForm.get('formHour');
  }

}
