import { RatingService } from './rating.service';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ScienceService extends RatingService {  
  constructor() {
    super();
  }
}
