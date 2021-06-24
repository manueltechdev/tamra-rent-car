import { Component, OnInit } from '@angular/core';
import {SignUpModalComponent} from '../../../modules/autentication/pages/sign-up-modal/sign-up-modal.component';
import {NbDialogService} from '@nebular/theme';
import {LoginComponent} from '../../../modules/autentication/pages/login/login.component';

@Component({
  selector: 'titan-header-home-menu',
  templateUrl: './header-home-menu.component.html',
  styleUrls: ['./header-home-menu.component.scss']
})
export class HeaderHomeMenuComponent implements OnInit {
  isMobileMenuOpened = false;

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  onScroll(): boolean {
    return window.scrollY > 0;
  }

  openDialog(): void {
    this.dialogService.open(SignUpModalComponent);
  }

  openLoginDialog(): void {
    this.dialogService.open(LoginComponent);
  }

  openMobileMenu(): void {
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
  }

}
