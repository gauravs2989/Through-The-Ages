import { RatingService } from './rating.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StrengthService extends RatingService {

  private units = {};
  private unitBuilt = new Subject<any>();
  public unitBuilt$;

  private unitDestroyed = new Subject<any>();
  public unitDestroyed$;

  private tacticalStrength: number;
  private nonTacticalStrength: number;

  constructor() {
    super();
    this.unitBuilt$ = this.unitBuilt.asObservable();
    this.unitDestroyed$ = this.unitDestroyed.asObservable();
    
    this.tacticalStrength = 0;
    this.nonTacticalStrength = 0;
  }

  updateScore() {
    // updating the strength means updating the rating
    super.updateRating(this.nonTacticalStrength + this.tacticalStrength);
  }

  onUnitAdded(card) {
    let unitType = card.getType();
    // if this is the first time we are building a unit of this type, create a category for it first
    if (!this.units[unitType]) {
      this.units[unitType] = [];
    }

    // if we haven't built a unit on this card before, store this card
    if (this.units[unitType].indexOf(card) === -1) {
      this.units[unitType].push(card);
    }

    // Notify listeners that a unit was built on this card
    this.unitBuilt.next(card);
  }

  onUnitDestroyed(card) {
    this.unitDestroyed.next(card);
  }

  getUnits() {
    return this.units;
  }
  
  getScore() {
    return super.getRating();
  }

  getNonTacticalStrength() {
    return this.nonTacticalStrength;
  }

  setTacticalStrength(tacticalStrength) {
    this.tacticalStrength = tacticalStrength;
    this.updateScore();
  }

  setNonTacticalStrength(nonTacticalStrength) {
    this.nonTacticalStrength = nonTacticalStrength;
    this.updateScore();
  }
}