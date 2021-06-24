import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoulModalComponent } from './seoul-modal.component';

describe('SeoulModalComponent', () => {
  let component: SeoulModalComponent;
  let fixture: ComponentFixture<SeoulModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoulModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoulModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
