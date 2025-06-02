import { TestBed } from '@angular/core/testing';

import { InauiryService } from './inauiry.service';

describe('InauiryService', () => {
  let service: InauiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InauiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
