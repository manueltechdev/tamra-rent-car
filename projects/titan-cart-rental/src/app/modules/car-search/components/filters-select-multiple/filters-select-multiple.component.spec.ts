import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersSelectMultipleComponent } from './filters-select-multiple.component';

describe('FiltersSelectMultpleComponent', () => {
  let component: FiltersSelectMultipleComponent;
  let fixture: ComponentFixture<FiltersSelectMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersSelectMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersSelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
