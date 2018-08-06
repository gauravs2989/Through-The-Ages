import { HappinessService } from '../../common/services/happiness.service';
import { StrengthService } from '../../common/services/strength.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'arenas',
  templateUrl: './../../common/templates/cardstack.template.html',
})
export class ArenasComponent implements OnInit {
  @Input('stack') stack;
  constructor(private strengthService: StrengthService, private happinessService: HappinessService) { }

  ngOnInit() {
  }

  onUnitBuilt(card) {
    this.updateStrength(card, 1);
    this.updateHappiness(card, 1);
  }

  onUnitDestroyed(card) {
    this.updateStrength(card, -1);
    this.updateHappiness(card, -1);
  }

  private updateStrength(card, multiplier) {
    let currentStrengthRating = this.strengthService.getNonTacticalStrength();
    let newStrengthRating = currentStrengthRating + (multiplier * card.getRating().strength);
    this.strengthService.setNonTacticalStrength(newStrengthRating);
  }

  private updateHappiness(card, multiplier) {
    let currentHappinessRating = this.happinessService.getRating();
    let newHappiness = currentHappinessRating + (multiplier * card.getRating().happiness);
    this.happinessService.updateRating(newHappiness);
  }
}
