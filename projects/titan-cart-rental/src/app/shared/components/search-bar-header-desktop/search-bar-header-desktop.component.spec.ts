import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarHeaderDesktopComponent } from './search-bar-header-desktop.component';

describe('SearchBarHeaderDesktopComponent', () => {
  let component: SearchBarHeaderDesktopComponent;
  let fixture: ComponentFixture<SearchBarHeaderDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarHeaderDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarHeaderDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
