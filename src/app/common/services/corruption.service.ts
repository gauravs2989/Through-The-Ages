import { Injectable } from '@angular/core';
import { BlueBankSection } from 'resources/bluebank/bluebanksection/bluebanksection';

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
  }

  setCorruptionFromEmptySection(section: BlueBankSection) {
    section ? this.setCorruption(section.getCorruption()) : this.setCorruption(0);
  }

  hasCorruption() : boolean {
    return this.corruption !== 0;
  }
}
