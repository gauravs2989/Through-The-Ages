import { TestBed, inject } from '@angular/core/testing';

import { BlueCubeService } from './blue-cube.service';

describe('BlueCubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlueCubeService]
    });
  });

  it('should be created', inject([BlueCubeService], (service: BlueCubeService) => {
    expect(service).toBeTruthy();
  }));
});
