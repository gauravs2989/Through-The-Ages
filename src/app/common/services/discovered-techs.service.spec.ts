import { TestBed, inject } from '@angular/core/testing';

import { DiscoveredTechsService } from './discovered-techs.service';

describe('DiscoveredTechsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscoveredTechsService]
    });
  });

  it('should be created', inject([DiscoveredTechsService], (service: DiscoveredTechsService) => {
    expect(service).toBeTruthy();
  }));
});
