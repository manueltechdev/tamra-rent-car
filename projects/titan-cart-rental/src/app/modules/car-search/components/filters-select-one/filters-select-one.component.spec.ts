import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersSelectOneComponent } from './filters-select-one.component';

describe('FiltersSelectOneComponent', () => {
  let component: FiltersSelectOneComponent;
  let fixture: ComponentFixture<FiltersSelectOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersSelectOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersSelectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
