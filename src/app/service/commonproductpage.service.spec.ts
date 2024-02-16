import { TestBed } from '@angular/core/testing';

import { CommonproductpageService } from './commonproductpage.service';

describe('CommonproductpageService', () => {
  let service: CommonproductpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonproductpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
