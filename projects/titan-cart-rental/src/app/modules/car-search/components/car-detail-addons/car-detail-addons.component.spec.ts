import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailAddonsComponent } from './car-detail-addons.component';

describe('CarDetailAddonsComponent', () => {
  let component: CarDetailAddonsComponent;
  let fixture: ComponentFixture<CarDetailAddonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailAddonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
