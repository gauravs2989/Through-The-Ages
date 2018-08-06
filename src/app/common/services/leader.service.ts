import { Injectable } from '@angular/core';
import { LeaderCard } from '../../cards/LeaderCard';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  
  private currentLeader : LeaderCard;

  constructor() { 
    this.currentLeader = null;
  }

  setCurrentLeader(card: LeaderCard) {
    this.currentLeader = card;
  }

  getCurrentLeader() : LeaderCard {
    return this.currentLeader
  }
}
