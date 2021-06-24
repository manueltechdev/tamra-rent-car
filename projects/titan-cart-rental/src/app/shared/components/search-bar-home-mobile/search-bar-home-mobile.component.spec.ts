import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarHomeMobileComponent } from './search-bar-home-mobile.component';

describe('SearchBarHomeMobileComponent', () => {
  let component: SearchBarHomeMobileComponent;
  let fixture: ComponentFixture<SearchBarHomeMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarHomeMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarHomeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
