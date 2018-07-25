import { DiscoveredTechsService } from './../../common/services/discovered-techs.service';
import { Component, OnInit, Input} from '@angular/core';
import { CardService } from '../../cards/card.service';
import { CardStack } from '../../cards/CardStack';
import { StrengthService } from '../../common/services/strength.service';

@Component({
  selector: 'military-techs',
  templateUrl: './military-techs.component.html',
  styleUrls: [
    './../../common/styles/cards.css',
    './military-techs.component.css'
  ]
})
export class MilitaryTechsComponent implements OnInit {
  private stacks = [];  

  constructor(private cardService: CardService, private strengthService: StrengthService, private discoveredTechsService: DiscoveredTechsService) {
    this.discoveredTechsService.techDiscovered$.subscribe( () => {
      this.stacks = this.discoveredTechsService.getMilitaryTechnologies();
    });
  }

  ngOnInit() {
    this.initializeInfantryStack();
  }

  initializeInfantryStack() {
    let initialCard = this.cardService.get("warriors");
    this.discoveredTechsService.discover(initialCard);
    initialCard.build();
    this.onUnitBuilt(initialCard);
  }

  onUnitBuilt(card) {
    this.updateStrength(card, 1);
    this.strengthService.onUnitAdded(card);
  }

  onUnitDestroyed(card) {
    this.updateStrength(card, -1);
    this.strengthService.onUnitDestroyed(card);
  }

  private updateStrength(card, multiplier) {
    let currentRating = this.strengthService.getNonTacticalStrength();
    let newRating = currentRating + (multiplier * card.getRating().strength);
    this.strengthService.setNonTacticalStrength(newRating);
  }

  private discover() {
    let newCard = this.cardService.get("knights");
    this.discoveredTechsService.discover(newCard);
  }
}