import { TestBed } from '@angular/core/testing';

import { ArrayServiceService } from './array-service.service';

describe('ArrayServiceService', () => {
  let service: ArrayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
