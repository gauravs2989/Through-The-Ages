import { TestBed, inject } from '@angular/core/testing';

import { CardrowService } from './cardrow.service';

describe('CardrowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardrowService]
    });
  });

  it('should be created', inject([CardrowService], (service: CardrowService) => {
    expect(service).toBeTruthy();
  }));
});
