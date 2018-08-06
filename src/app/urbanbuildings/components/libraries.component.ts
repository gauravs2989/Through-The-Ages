import { ScienceService } from '../../common/services/science.service';
import { CultureService } from '../../common/services/culture.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'libraries',
  templateUrl: './../../common/templates/cardstack.template.html'
})
export class LibrariesComponent implements OnInit {
  @Input('stack') stack;
  constructor(private scienceService: ScienceService, private cultureService: CultureService) { }

  ngOnInit() {
  }

  onUnitBuilt(card) {
    let currentCultureRating = this.cultureService.getRating();
    let newCultureRating = currentCultureRating + card.getRating().culture;
    this.cultureService.updateRating(newCultureRating);

    let currentScienceRating = this.scienceService.getRating();
    let newScience = currentScienceRating + card.getRating().science;
    this.scienceService.updateRating(newScience);
  }

  onUnitDestroyed(card) {
    let currentCultureRating = this.cultureService.getRating();
    let newCultureRating = Math.max(0, currentCultureRating - card.getRating().culture);
    this.cultureService.updateRating(newCultureRating);

    let currentScienceRating = this.scienceService.getRating();
    let newScience = Math.max(0, currentScienceRating - card.getRating().science);
    this.scienceService.updateRating(newScience);
  }
}