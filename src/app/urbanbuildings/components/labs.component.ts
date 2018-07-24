import { ScienceService } from './../../common/services/science.service';
import { DiscoveredTechsService } from './../../common/services/discovered-techs.service';
import { CardService } from './../../cards/card.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'labs',
  templateUrl: './../../common/templates/cardstack.template.html'
})
export class LabsComponent implements OnInit {
  @Input('stack') stack;
  constructor(private cardService: CardService, private discoveredTechsService: DiscoveredTechsService, private scienceService: ScienceService) { 
    this.initialize();
  }

  ngOnInit() {
  }
  
  private initialize() {
    let initialCard = this.cardService.get("philosophy");
    this.discoveredTechsService.discover(initialCard);
    initialCard.build();
    this.onUnitBuilt(initialCard);
  }

  private onUnitBuilt(card) {
    let currentRating = this.scienceService.getRating();
    let newRating = currentRating + card.getRating().science;
    this.scienceService.updateRating(newRating);
  }

  private onUnitDestroyed(card) {
    let currentRating = this.scienceService.getRating();
    let newRating = Math.max(0, currentRating - card.getRating().science);
    this.scienceService.updateRating(newRating);
  }
}