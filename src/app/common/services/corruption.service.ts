import { Injectable } from '@angular/core';
import { BlueBankSection } from '../../resources/bluebank/bluebanksection/bluebanksection';

@Injectable({
  providedIn: 'root'
})
export class CorruptionService {

  private corruption: number;

  constructor() { 
    this.corruption = 0;
  }

  private setCorruption(corruption) {
    this.corruption = corruption;
    console.log("Losing resources: " + -1 * this.corruption + " to corruption.");
  }

  setCorruptionFromEmptySection(section: BlueBankSection) {
    section ? this.setCorruption(section.getCorruption()) : this.setCorruption(0);
  }
}
