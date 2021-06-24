import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailInsuranceComponent } from './car-detail-insurance.component';

describe('CarDetailInsuranceComponent', () => {
  let component: CarDetailInsuranceComponent;
  let fixture: ComponentFixture<CarDetailInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
