import { TestBed, inject } from '@angular/core/testing';

import { YellowCubeService } from './yellow-cube.service';

describe('YellowCubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YellowCubeService]
    });
  });

  it('should be created', inject([YellowCubeService], (service: YellowCubeService) => {
    expect(service).toBeTruthy();
  }));
});
