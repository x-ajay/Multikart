import { TestBed } from '@angular/core/testing';

import { Electronic1Service } from './electronic1.service';

describe('Electronic1Service', () => {
  let service: Electronic1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Electronic1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
