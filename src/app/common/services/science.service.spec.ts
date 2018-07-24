import { TestBed, inject } from '@angular/core/testing';

import { ScienceService } from './science.service';

describe('ScienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScienceService]
    });
  });

  it('should be created', inject([ScienceService], (service: ScienceService) => {
    expect(service).toBeTruthy();
  }));
});
