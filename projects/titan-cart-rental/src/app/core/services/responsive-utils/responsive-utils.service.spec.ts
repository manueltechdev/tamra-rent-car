import { TestBed } from '@angular/core/testing';

import { ResponsiveUtilsService } from './responsive-utils.service';

describe('ResponsiveUtilsService', () => {
  let service: ResponsiveUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
