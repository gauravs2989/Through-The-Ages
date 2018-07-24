import { TestBed, inject } from '@angular/core/testing';

import { TacticsService } from './tactics.service';

describe('TacticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TacticsService]
    });
  });

  it('should be created', inject([TacticsService], (service: TacticsService) => {
    expect(service).toBeTruthy();
  }));
});
