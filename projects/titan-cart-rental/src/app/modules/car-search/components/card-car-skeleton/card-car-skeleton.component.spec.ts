import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarSkeletonComponent } from './card-car-skeleton.component';

describe('CardCarSkeletonComponent', () => {
  let component: CardCarSkeletonComponent;
  let fixture: ComponentFixture<CardCarSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
