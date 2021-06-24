import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHomeMenuComponent } from './header-home-menu.component';

describe('HeaderHomeMenuComponent', () => {
  let component: HeaderHomeMenuComponent;
  let fixture: ComponentFixture<HeaderHomeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHomeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHomeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
