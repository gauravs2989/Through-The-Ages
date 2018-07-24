import { CultureService } from './../../common/services/culture.service';
import { HappinessService } from './../../common/services/happiness.service';
import { DiscoveredTechsService } from './../../common/services/discovered-techs.service';
import { CardService } from './../../cards/card.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'theaters',
  templateUrl: './../../common/templates/cardstack.template.html'
})
export class TheatersComponent implements OnInit {
  @Input('stack') stack;
  constructor(private cardService: CardService, private discoveredTechsService: DiscoveredTechsService, 
    private cultureService: CultureService, private happinessService: HappinessService) { }

  ngOnInit() {
  }

  onUnitBuilt(card) {
    
    this.updateCulture(card, 1);
    this.updateHappiness(card, 1);
  }

  onUnitDestroyed(card) {
    this.updateCulture(card, -1);
    this.updateHappiness(card, -1);
  }

  private updateCulture(card, multiplier) {
    let currentCultureRating = this.cultureService.getRating();
    let newCultureRating = currentCultureRating + (multiplier * card.getRating().culture);
    this.cultureService.updateRating(newCultureRating);
  }

  private updateHappiness(card, multiplier) {
    let currentHappiness = this.happinessService.getRating();
    let newHappiness = Math.max(0, currentHappiness + (multiplier * card.getRating().happiness));
    this.happinessService.updateRating(newHappiness);
  }

}
