import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titan-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showLanguagesDropdown = false;

  constructor() { }

  ngOnInit(): void {
  }

  showLanguages(): void {
    this.showLanguagesDropdown = !this.showLanguagesDropdown;
  }

}
