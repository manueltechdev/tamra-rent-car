import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarHomeDesktopComponent } from './search-bar-home-desktop.component';

describe('SearchBarHomeDesktopComponent', () => {
  let component: SearchBarHomeDesktopComponent;
  let fixture: ComponentFixture<SearchBarHomeDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarHomeDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarHomeDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
