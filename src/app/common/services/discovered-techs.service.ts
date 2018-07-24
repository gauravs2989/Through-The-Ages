import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { CardTypes } from '../../cards/card-types';

@Injectable()
export class DiscoveredTechsService {

  private discoveredTechs: any;
  private techDiscoveredSubject = new Subject<any>();
  public techDiscovered$;

  private militaryTechs = [CardTypes.INFANTRY, CardTypes.CAVALRY, CardTypes.ARTILLERY, CardTypes.AIRFORCES];
  private brownTechs = [CardTypes.FARM, CardTypes.MINE];
  private urbanBuildingTechs = [CardTypes.LAB, CardTypes.TEMPLE, CardTypes.ARENA, CardTypes.LIBRARY, CardTypes.THEATER];
  private government;

  constructor() {
    this.discoveredTechs = {};
    this.techDiscovered$ = this.techDiscoveredSubject.asObservable();
  }

  discover(card) {
    let type = card.type;
    // if we haven't discovered a tech of this type, add a new category
    if (!this.discoveredTechs[type]) {
      this.discoveredTechs[type] = [];
    }
    this.discoveredTechs[type].push(card);
    this.techDiscoveredSubject.next(card);
  }

  updateGovernment(newGovernment) {
    this.government = newGovernment;
    this.techDiscoveredSubject.next(newGovernment);
  }

  getMilitaryTechnologies() {
    let discoveredTechs = [];
    this.militaryTechs.slice().reverse().forEach( (tech) => {
      if (this.discoveredTechs[tech]) {
        discoveredTechs.push(this.discoveredTechs[tech]);
      }
    });
    return discoveredTechs;
  }

  getBrownTechnologies() {
    let discoveredTechs = [];
    this.brownTechs.forEach( (tech) => {
      if (this.discoveredTechs[tech]) {
        discoveredTechs.push(this.discoveredTechs[tech]);
      }
    });
    return discoveredTechs;
  }

  getUrbanBuildingTechnologies() {
    let discoveredTechs = [];
    this.urbanBuildingTechs.forEach( (tech) => {
      if (this.discoveredTechs[tech]) {
        discoveredTechs.push(this.discoveredTechs[tech]);
      }
    });
    return discoveredTechs;
  }

  getDiscoveredTechs(technologyType) {
    return this.sortTechsByLevel(technologyType);
  }

  private sortTechsByLevel(technologyType) {
    let discoveredTechs = this.discoveredTechs[technologyType];
    if (discoveredTechs) {
      return discoveredTechs.sort((card1, card2) => {
        var level1 = card1.level;
        var level2 = card2.level;
        return level1 - level2;
      })
    };
  }
}
