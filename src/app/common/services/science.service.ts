import { RatingService } from './rating.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ScienceService extends RatingService {  
  constructor() {
    super();
  }
}
