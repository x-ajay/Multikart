import { TestBed } from '@angular/core/testing';

import { Electronic2Service } from './electronic2.service';

describe('Electronic2Service', () => {
  let service: Electronic2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Electronic2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
