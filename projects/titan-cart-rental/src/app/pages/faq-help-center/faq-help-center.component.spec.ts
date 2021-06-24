import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqHelpCenterComponent } from './faq-help-center.component';

describe('FaqHelpCenterComponent', () => {
  let component: FaqHelpCenterComponent;
  let fixture: ComponentFixture<FaqHelpCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqHelpCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqHelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
