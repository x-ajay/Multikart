import { TestBed } from '@angular/core/testing';

import { ProductsAService } from './products-a.service';

describe('ProductsAService', () => {
  let service: ProductsAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
