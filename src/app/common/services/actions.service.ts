import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ActionsService {

  private government;
  private governmentSubject = new Subject<any>();
  public government$;

  private civilActions: number = 0;
  private civilActionsSubject = new Subject<any>();
  public civilActions$;

  private optionalCivilActions: number = 0;

  private militaryActions: number = 0;
  private militaryActionsSubject = new Subject<any>();
  public militaryActions$;

  constructor() {
    this.government$ = this.governmentSubject.asObservable();
    this.civilActions$ = this.civilActionsSubject.asObservable();
    this.militaryActions$ = this.militaryActionsSubject.asObservable();
  }

  updateGovernment(card) {
    this.government = card;
    this.governmentSubject.next(this.government);
    this.updateCivilActions(this.government.getCivilActions());
    this.updateMilitaryActions(this.government.getMilitaryActions());
  }

  getCivilActions() {
    return this.civilActions;
  }

  getMilitaryActions() {
    return this.militaryActions;        
  }

  updateCivilActions(newActions) {
    this.civilActions = newActions;
    this.civilActionsSubject.next();
  }

  updateMilitaryActions(newActions) {

    // if all the military actions are used up, then the optional civil action (Hammurabi) is not available
    if (!newActions) {
      this.setOptionalCivilActions(0);
    }

    this.militaryActions = newActions;
    this.militaryActionsSubject.next();
  }

  setOptionalCivilActions(optionalCivilActions) {
    this.optionalCivilActions = optionalCivilActions;
    this.civilActionsSubject.next();
  }

  getOptionalCivilActions() {
    return this.optionalCivilActions;
  }
}
