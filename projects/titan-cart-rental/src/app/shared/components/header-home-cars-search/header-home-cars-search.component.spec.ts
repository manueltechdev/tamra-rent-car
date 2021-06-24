import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHomeCarsSearchComponent } from './header-home-cars-search.component';

describe('HeaderHomeCarsSearchComponent', () => {
  let component: HeaderHomeCarsSearchComponent;
  let fixture: ComponentFixture<HeaderHomeCarsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHomeCarsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHomeCarsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
