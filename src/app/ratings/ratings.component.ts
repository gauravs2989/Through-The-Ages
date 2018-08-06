import { ColonizationService } from '../common/services/colonization.service';
import { ResourceService } from '../common/services/resource.service';
import { Subject } from 'rxjs/Subject';
import { FoodService } from '../common/services/food.service';
import { CultureService } from '../common/services/culture.service';
import { ScienceService } from '../common/services/science.service';
import { StrengthService } from '../common/services/strength.service';

import { Component } from '@angular/core';

@Component({
  selector: 'ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
  private culture: number = 0;
  private cultureRating: number = 0;

  private science: number = 0;
  private scienceRating: number;

  private strength: number = 0;
  private colonization: number = 0;
  
  private food: number = 0;
  private foodGrowth: number;

  private resources: number = 0;
  private resourceGrowth: number;

  private militarySpecificResources: number = 0;

  constructor(private strengthService: StrengthService, private scienceService: ScienceService, 
    private cultureService: CultureService, private foodService: FoodService, 
    private resourceService: ResourceService, private colonizationService: ColonizationService) {

      this.addListeners();
  }

  private addListeners() {
    this.strengthService.ratingChanged$.subscribe( updatedStrength => {
      this.strength = updatedStrength;
    });

    this.colonizationService.ratingChanged$.subscribe( updatedColonization => {
      this.colonization = updatedColonization;
    });

    this.scienceService.ratingChanged$.subscribe( updatedScienceRating => {
      this.scienceRating = Math.max(0, updatedScienceRating);
    });

    this.scienceService.scoreChanged$.subscribe( updatedScience => {
      this.science = Math.max(0, updatedScience);
    });

    this.cultureService.ratingChanged$.subscribe( updatedCultureRating => {
      this.cultureRating = Math.max(0, updatedCultureRating);
    });

    this.cultureService.scoreChanged$.subscribe( updatedCulture => {
      this.culture = Math.max(0, updatedCulture);
    });

    this.foodService.ratingChanged$.subscribe( updatedFoodRating => {
      this.foodGrowth = updatedFoodRating;
    });

    this.foodService.scoreChanged$.subscribe( updatedFood => {
      this.food = updatedFood;
    });

    this.resourceService.ratingChanged$.subscribe( updatedResourceRating => {
      this.resourceGrowth = updatedResourceRating;
    });

    this.resourceService.scoreChanged$.subscribe( updatedResources => {
      this.resources = updatedResources;
    });

    this.resourceService.militarySpecificResources$.subscribe( newMilitaryResources => {
      this.militarySpecificResources = newMilitaryResources;
    });
  }
}