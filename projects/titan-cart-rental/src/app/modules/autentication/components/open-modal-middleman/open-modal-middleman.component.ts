import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {LoginComponent} from '../../pages/login/login.component';
import {SignUpModalComponent} from '../../pages/sign-up-modal/sign-up-modal.component';

/**
 * This component is created due to circular dependency in login and sign-up
 */
@Component({
  selector: 'titan-open-modal-middleman',
  templateUrl: './open-modal-middleman.component.html',
  styleUrls: ['./open-modal-middleman.component.scss']
})
export class OpenModalMiddlemanComponent implements OnInit {
  @Input() isLogin: boolean;
  constructor(private dialogService: NbDialogService,
              protected ref: NbDialogRef<LoginComponent | SignUpModalComponent>) { }

  ngOnInit(): void {
  }


  closeDialogAndOpenLogin(): void {
    this.ref.close();
    if (this.isLogin) {
      this.dialogService.open(SignUpModalComponent);
    } else {
      this.dialogService.open(LoginComponent);
    }
  }
}
