import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titan-header-home-cars-search',
  templateUrl: './header-home-cars-search.component.html',
  styleUrls: ['./header-home-cars-search.component.scss']
})
export class HeaderHomeCarsSearchComponent implements OnInit {
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
