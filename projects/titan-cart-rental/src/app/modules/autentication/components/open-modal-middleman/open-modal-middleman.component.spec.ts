import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenModalMiddlemanComponent } from './open-modal-middleman.component';

describe('OpenModalMiddlemanComponent', () => {
  let component: OpenModalMiddlemanComponent;
  let fixture: ComponentFixture<OpenModalMiddlemanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenModalMiddlemanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenModalMiddlemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
