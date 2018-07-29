import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorruptionService {

  private corruption: number;

  constructor() { 
    this.corruption = 0;
  }

  setCorruption(corruption) {
    
  }
}
