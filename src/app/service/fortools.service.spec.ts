import { TestBed } from '@angular/core/testing';

import { FortoolsService } from './fortools.service';

describe('FortoolsService', () => {
  let service: FortoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
