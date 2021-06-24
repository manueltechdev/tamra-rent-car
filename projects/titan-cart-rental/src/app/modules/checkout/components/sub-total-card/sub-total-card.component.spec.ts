import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTotalCardComponent } from './sub-total-card.component';

describe('SubTotalCardComponent', () => {
  let component: SubTotalCardComponent;
  let fixture: ComponentFixture<SubTotalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTotalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTotalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
