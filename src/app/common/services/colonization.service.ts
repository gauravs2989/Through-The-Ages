import { RatingService } from './rating.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ColonizationService extends RatingService {

  constructor() {
    super();
  }

  updateScore(newScore) {
    super.updateRating(newScore);
  }
}
