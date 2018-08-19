import { RatingService } from './rating.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CultureService extends RatingService {
  constructor() {
    super();
  }
}
