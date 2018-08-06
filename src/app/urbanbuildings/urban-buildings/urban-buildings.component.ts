import { DiscoveredTechsService } from '../../common/services/discovered-techs.service';
import { Component } from '@angular/core';
import { CardTypes } from '../../cards/card-types';

@Component({
  selector: 'urban-buildings',
  templateUrl: './urban-buildings.component.html',
  styleUrls: [
    './urban-buildings.component.css',
    './../../common/styles/cards.css'
  ]
})
export class UrbanBuildingsComponent {
  private stacks = [];
  
  constructor(private discoveredTechsService: DiscoveredTechsService) {
    this.discoveredTechsService.techDiscovered$.subscribe( () => {
      this.stacks =  this.discoveredTechsService.getUrbanBuildingTechnologies();
    });
  }

  getLabStack() {
    return this.discoveredTechsService.getDiscoveredTechs(CardTypes.LAB);
  }

  getTempleStack() {
    return this.discoveredTechsService.getDiscoveredTechs(CardTypes.TEMPLE);
  }

  getTheaterStack() {
    return this.discoveredTechsService.getDiscoveredTechs(CardTypes.THEATER);
  }

  getLibraryStack() {
    return this.discoveredTechsService.getDiscoveredTechs(CardTypes.LIBRARY);
  }
 
  getArenaStack() {
    return this.discoveredTechsService.getDiscoveredTechs(CardTypes.ARENA);
  }
}