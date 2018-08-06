import { Token } from '../Token';
import { FoodService } from './food.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class YellowCubeService {
  /**
   * Notifiers that a population was gained. This means that a yellow cube is 
   * added to the list of available workers.
   */
  private populationGainedSubject = new Subject<any>();
  public populationGained$;

  /**
   * Notifies that a yellow cube was gained. This means that a yellow cube is 
   * added to the supply of yellow cubes.
   */
  private yellowCubeGainedSubject = new Subject<any>();
  public yellowCubeGained$;

  private costForCube: number;
  private discontentWorkers: number = 0;
  private discount: number = 0;

  private availableWorkers: Token[] = [];

  constructor(private foodService: FoodService) {
    this.populationGained$ = this.populationGainedSubject.asObservable();
    this.yellowCubeGained$ = this.yellowCubeGainedSubject.asObservable();
    // Initialize with one yellow cube available for use
    this.addToken();
  }

  /**
   * Adds a worker as an unused worker to the list of available workers
   */
  addNewWorker() {
    this.addToken();
    this.onUnusedWorkerAdded(); 
    this.payFood();
  }

  /**
   * Adds a disbanded worker to the list of available workers
   */
  addDisbandedWorker() {
    this.addToken();
  }

  /**
   * Adds a yellow cube to the supply of yellow cubes
   */
  addYellowCube() {
    this.yellowCubeGainedSubject.next();
  }

  /**
   * Removes a worker from the list of available workers
   */
  removeUnusedWorker() {
    this.availableWorkers.pop();
  }

  /**
   * Gets all the available workers
   * 
   * @return {Token[]} the list of available workers
   */
  getAvailableWorkers() {
    return this.availableWorkers;
  }

  /**
   * Sets the discount for moving a yellow cube to the list of available workers
   * @param discount the discount for a yellow cube
   */
  setDiscount(discount) {
    this.discount = discount;
  }

  /**
   * Sets the cost for moving a yellow cube to the list of available workers, 
   * not considering any discounts
   * @param yellowCubeCost the cost of moving a yellow cube to the list of available workers not considering any discounts
   */
  setCostForCube(yellowCubeCost) {
    this.costForCube = yellowCubeCost;
  }

  /**
   * Determines if a yellow cube can be moved to the list of available workers
   * 
   * @return {boolean} 
   */
  isPopulationAvailable() {
    let availableFood = this.foodService.getScore();
    return availableFood >= (this.costForCube - this.discount);
  }

  /**
   * Update discontent workers
   * 
   * @param discontentWorkers The number of discontent workers
   */
  updateDiscontentWorkers(discontentWorkers) {
    this.discontentWorkers = discontentWorkers;
  }

  /**
   * Returns the number of discontent workers
   */
  getDiscontentWorkers() {
    return this.discontentWorkers;
  }

  /**
   * Adds a @type {Token} to the list of available workers
   */
  private addToken() {
    let newToken = new Token();
    newToken.setFilled(true);
    this.availableWorkers.push(newToken);
  }

  /**
   * Updates the food score when a worker is added to the list of available workers
   */
  private payFood() {    
    // pay for the food
    let amount = this.costForCube - this.discount;
    this.foodService.payFood(amount);
    this.foodService.updateScore(this.foodService.getScore() - amount);
  }

  /**
   * Emits an event notifying that a worker was added to the list of available workers
   */
  private onUnusedWorkerAdded() {
    this.populationGainedSubject.next();
  }
}
