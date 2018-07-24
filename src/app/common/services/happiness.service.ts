import { RatingService } from './rating.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HappinessService extends RatingService {
  constructor() { 
    super();
  }

  updateScore(newHappiness) {
    this.updateRating(newHappiness);
  }

  updateRating(newHappiness) {
    super.updateRating(newHappiness);
  }
}