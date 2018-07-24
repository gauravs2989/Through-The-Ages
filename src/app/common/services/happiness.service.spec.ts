import { TestBed, inject } from '@angular/core/testing';

import { HappinessService } from './happiness.service';

describe('HappinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HappinessService]
    });
  });

  it('should be created', inject([HappinessService], (service: HappinessService) => {
    expect(service).toBeTruthy();
  }));
});
