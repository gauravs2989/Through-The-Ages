import { TestBed, inject } from '@angular/core/testing';

import { CultureService } from './common/services/culture.service';

describe('CultureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CultureService]
    });
  });

  it('should be created', inject([CultureService], (service: CultureService) => {
    expect(service).toBeTruthy();
  }));
});
