import { TransactionService } from './transaction.service';
import { CardTypes } from 'cards/card-types';
import { RatingService } from './rating.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FoodService extends RatingService {
  private consumption: number = 0;

  constructor(private transactionService: TransactionService) {
    super();
  }

  /**
   * Pay the amount of food specified in blue cubes
   * 
   * @param amount The amount of food to pay
   */
  payFood(amount) {
    this.transactionService.spend(amount, CardTypes.FARM);
  }

  /**
   * 
   * @param amount The amount of food to gain
   */
  gainFood(amount) {
    this.transactionService.gain(amount, CardTypes.FARM);
  }

  /**
   * Sets the food consumption
   * @param consumption The food consumption
   */
  setConsumption(consumption) {
    this.updateRating(this.getRating() + (consumption - this.consumption));
    this.consumption = consumption;
  }

  /**
   * Returns the food consumption
   */
  getConsumption() {
    return this.consumption;
  }
}