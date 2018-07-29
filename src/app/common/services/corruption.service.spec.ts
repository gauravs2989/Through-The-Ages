import { TestBed, inject } from '@angular/core/testing';

import { CorruptionService } from './corruption.service';

describe('CorruptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorruptionService]
    });
  });

  it('should be created', inject([CorruptionService], (service: CorruptionService) => {
    expect(service).toBeTruthy();
  }));
});
