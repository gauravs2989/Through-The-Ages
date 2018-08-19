import { HappinessService } from 'common/services/happiness.service';
import { CultureService } from 'common/services/culture.service';
import { DiscoveredTechsService } from 'common/services/discovered-techs.service';
import { CardService } from 'cards/card.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'temples',
  templateUrl: './../../common/templates/cardstack.template.html'
})
export class TemplesComponent implements OnInit {
  @Input('stack') stack;
  constructor(private cardService: CardService, private discoveredTechsService: DiscoveredTechsService, 
    private cultureService: CultureService, private happinessService: HappinessService) {
    this.initialize();
  }

  ngOnInit() {
  }

  onUnitBuilt(card) {
    let currentCultureRating = this.cultureService.getRating();
    let newCultureRating = currentCultureRating + card.getRating().culture;
    this.cultureService.updateRating(newCultureRating);

    let currentHappiness = this.happinessService.getRating();
    let newHappiness = currentHappiness + card.getRating().happiness;
    this.happinessService.updateRating(newHappiness);
  }

  onUnitDestroyed(card) {
    let currentCultureRating = this.cultureService.getRating();
    let newCultureRating = Math.max(0, currentCultureRating - card.getRating().culture);
    this.cultureService.updateRating(newCultureRating);

    let currentHappiness = this.happinessService.getRating();
    let newHappiness = Math.max(0, currentHappiness - card.getRating().happiness);
    this.happinessService.updateRating(newHappiness);
  }

  private initialize() {
    let initialCard = this.cardService.get("religion");
    this.discoveredTechsService.discover(initialCard);
  }
}
