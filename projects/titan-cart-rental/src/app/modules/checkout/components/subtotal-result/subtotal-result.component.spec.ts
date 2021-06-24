import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtotalResultComponent } from './subtotal-result.component';

describe('SubtotalResultComponent', () => {
  let component: SubtotalResultComponent;
  let fixture: ComponentFixture<SubtotalResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtotalResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtotalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
