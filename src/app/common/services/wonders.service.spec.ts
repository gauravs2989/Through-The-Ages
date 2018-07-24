import { TestBed, inject } from '@angular/core/testing';

import { WondersService } from './wonders.service';

describe('WondersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WondersService]
    });
  });

  it('should be created', inject([WondersService], (service: WondersService) => {
    expect(service).toBeTruthy();
  }));
});
