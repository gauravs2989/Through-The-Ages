import { CardTypes } from '../../cards/card-types';
import { Subject } from 'rxjs/Subject';
import { RatingService } from './rating.service';
import { Injectable } from '@angular/core';
import { TransactionService } from './transaction.service';

@Injectable()
export class ResourceService extends RatingService {

  private militarySpecificResources;
  private militarySpecificResourcesSubject = new Subject<number>();
  public militarySpecificResources$;

  constructor(private transactionService: TransactionService) { 
    super();
    this.militarySpecificResources = 0;
    this.militarySpecificResources$ = this.militarySpecificResourcesSubject.asObservable();
  }

  payResources(amount) {
    this.transactionService.spend(amount, CardTypes.MINE);
    this.updateScore(this.getScore() - amount);
  }

  gainResources(amount) {
    this.transactionService.gain(amount, CardTypes.MINE);
    this.updateScore(this.getScore() + amount);  
  }

  getMilitarySpecificResources() {
    return this.militarySpecificResources;
  }

  updateMilitarySpecificResources(newMilitaryResources) {
    this.militarySpecificResources = newMilitaryResources;
    this.militarySpecificResourcesSubject.next(this.militarySpecificResources);
  }
}
