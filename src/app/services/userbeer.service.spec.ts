import { TestBed, inject } from '@angular/core/testing';

import { UserbeerService } from './userbeer.service';

describe('UserbeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserbeerService]
    });
  });

  it('should be created', inject([UserbeerService], (service: UserbeerService) => {
    expect(service).toBeTruthy();
  }));
});
