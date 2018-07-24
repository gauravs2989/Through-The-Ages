import { TestBed, inject } from '@angular/core/testing';

import { ColonizationService } from './colonization.service';

describe('ColonizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColonizationService]
    });
  });

  it('should be created', inject([ColonizationService], (service: ColonizationService) => {
    expect(service).toBeTruthy();
  }));
});
