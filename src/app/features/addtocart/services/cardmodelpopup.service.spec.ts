import { TestBed } from '@angular/core/testing';

import { CardmodelpopupService } from './cardmodelpopup.service';

describe('CardmodelpopupService', () => {
  let service: CardmodelpopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardmodelpopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
