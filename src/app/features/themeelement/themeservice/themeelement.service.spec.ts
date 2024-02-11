import { TestBed } from '@angular/core/testing';

import { ThemeelementService } from './themeelement.service';

describe('ThemeelementService', () => {
  let service: ThemeelementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeelementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
