import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCarsSearchComponent } from './search-bar-cars-search.component';

describe('SearchBarCarsSearchComponent', () => {
  let component: SearchBarCarsSearchComponent;
  let fixture: ComponentFixture<SearchBarCarsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarCarsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarCarsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
