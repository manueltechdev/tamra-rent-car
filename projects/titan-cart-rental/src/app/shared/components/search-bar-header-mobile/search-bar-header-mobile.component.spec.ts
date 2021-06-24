import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarHeaderMobileComponent } from './search-bar-header-mobile.component';

describe('SearchBarHeaderMobileComponent', () => {
  let component: SearchBarHeaderMobileComponent;
  let fixture: ComponentFixture<SearchBarHeaderMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarHeaderMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
