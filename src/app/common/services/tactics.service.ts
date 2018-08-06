import { Injectable } from '@angular/core';
import { StrengthService } from './strength.service';
import { TacticsCard } from '../../cards/TacticsCard';
import { CardTypes } from '../../cards/card-types';

@Injectable()
export class TacticsService {

  private currentTactic: TacticsCard;
  private nonAntiquatedArmies: number;
  private antiquatedArmies: number;

  private units: any = {};

  constructor(private strengthService: StrengthService) { 
    
    this.nonAntiquatedArmies = 0;
    this.antiquatedArmies = 0;

    this.units[CardTypes.INFANTRY] = [0, 0, 0, 0];
    this.units[CardTypes.CAVALRY] = [0, 0, 0, 0];
    this.units[CardTypes.ARTILLERY] = [0, 0, 0, 0];
    this.units[CardTypes.AIRFORCES] = [0, 0, 0, 0];

    this.strengthService.unitBuilt$.subscribe((card) => {
      this.updateUnits(card, 1);
    });

    this.strengthService.unitDestroyed$.subscribe((card) => {
      this.updateUnits(card, -1);
    });
  }

  setTactic(card: TacticsCard) {
    this.currentTactic = card;
    this.updateTacticalBonus();
  }

  getCurrentTactic() {
    return this.currentTactic;
  }

  private updateUnits(card, direction) {
    let cardLevel = card.getLevel();
    let cardType = card.getType();
    this.units[cardType][cardLevel] += (1*direction);

    this.updateTacticalBonus();
  }

  private updateTacticalBonus() {
    // If there is no tactic, return
    if (!this.currentTactic) { 
      return;
    }

    let composition = this.currentTactic.getComposition();
    // console.log(composition);
    let tacticLevel = this.currentTactic.getLevel();
    let tacticsStrength = 0;

    // Compute non antiquated armies
    let tacticInfantry = composition[CardTypes.INFANTRY];
    let tacticCavalry = composition[CardTypes.CAVALRY];
    let tacticArtillery = composition[CardTypes.ARTILLERY];

    let nonAntiquatedInfantryUnits = this.getNonAntiquatedUnits(this.units[CardTypes.INFANTRY], tacticLevel - 1);
    // console.log(nonAntiquatedInfantryUnits);
    let nonAntiquatedCavalryUnits = this.getNonAntiquatedUnits(this.units[CardTypes.CAVALRY], tacticLevel - 1);
    // console.log(nonAntiquatedCavalryUnits);
    let nonAntiquatedArtilleryUnits = this.getNonAntiquatedUnits(this.units[CardTypes.ARTILLERY], tacticLevel - 1);
    // console.log(nonAntiquatedArtilleryUnits);
    let nonAntiquatedArmyUnits = [];
    if (tacticInfantry) {
      nonAntiquatedArmyUnits.push(Math.floor(nonAntiquatedInfantryUnits/tacticInfantry));
    }
    if (tacticCavalry) {
      nonAntiquatedArmyUnits.push(Math.floor(nonAntiquatedCavalryUnits/tacticCavalry));
    }
    if (tacticArtillery) {
      nonAntiquatedArmyUnits.push(Math.floor(nonAntiquatedArtilleryUnits/tacticArtillery));
    }
    this.nonAntiquatedArmies = Math.min.apply(null, nonAntiquatedArmyUnits);
    // console.log("Non antiquated armies: " + this.nonAntiquatedArmies);

    tacticsStrength = this.nonAntiquatedArmies * this.currentTactic.getPrimaryBonus();
    
    // Compute antiquated armies
    let antiquatedArmyUnits = [];
    if (this.currentTactic.getSecondaryBonus()) {
      if (tacticInfantry) {
        let nonAntiquatedInfantryUnitsRemaining = nonAntiquatedInfantryUnits - (this.nonAntiquatedArmies * tacticInfantry);
        let infantryUnitsRemaining = this.getAntiquatedUnits(this.units[CardTypes.INFANTRY], tacticLevel - 1) + nonAntiquatedInfantryUnitsRemaining;
        // console.log("Remaining infantry units: " + infantryUnitsRemaining);
        antiquatedArmyUnits.push(Math.floor(infantryUnitsRemaining/tacticInfantry));
      }
      
      if (tacticCavalry) {
        let nonAntiquatedCavalryUnitsRemaining = nonAntiquatedCavalryUnits - (this.nonAntiquatedArmies * tacticCavalry);
        let cavalryUnitsRemaining = this.getAntiquatedUnits(this.units[CardTypes.CAVALRY], tacticLevel - 1) + nonAntiquatedCavalryUnitsRemaining;
        // console.log("Remaining cavalry units: " + cavalryUnitsRemaining);
        antiquatedArmyUnits.push(Math.floor(cavalryUnitsRemaining/tacticCavalry));
      }

      if (tacticArtillery) {
        let nonAntiquatedArtilleryUnitsRemaining = nonAntiquatedArtilleryUnits - (this.nonAntiquatedArmies * tacticArtillery);
        let artilleryUnitsRemaining = this.getAntiquatedUnits(this.units[CardTypes.ARTILLERY], tacticLevel - 1) + nonAntiquatedArtilleryUnitsRemaining;
        // console.log("Remaining artillery units: " + artilleryUnitsRemaining);
        antiquatedArmyUnits.push(Math.floor(artilleryUnitsRemaining/tacticArtillery));
      }
      this.antiquatedArmies = Math.min.apply(null, antiquatedArmyUnits);
      // console.log("Antiquated armies: " + this.antiquatedArmies);

      tacticsStrength += this.antiquatedArmies * this.currentTactic.getSecondaryBonus();
      
    }
    console.log(tacticsStrength);
    this.strengthService.setTacticalStrength(tacticsStrength);
  }

  // Helper functions
  private getNonAntiquatedUnits(units, level) {
    return units.slice(level).reduce((a, b) => {return a+b;});
  }

  private getAntiquatedUnits(units, level) {
    return units.slice(0, level).reduce((a, b) => {return a+b;});
  }
}