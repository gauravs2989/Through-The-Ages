import { FoodService } from 'common/services/food.service';
import { YellowCubeService } from 'common/services/yellow-cube.service';
import { YellowBankSection } from './yellowbanksection/yellowbanksection';
import { Component, OnInit } from '@angular/core';
import { HappinessService } from 'common/services/happiness.service';

@Component({
  selector: 'yellowbank',
  templateUrl: './yellowbank.component.html',
  styleUrls: ['./yellowbank.component.css']
})
export class YellowBankComponent {

  private sections: YellowBankSection[] = [];
  private sectionIndex: number = 0;
  private activeSection: YellowBankSection;
  private initialCapacity: number = 18;

  private foodCosts = [7, 5, 4, 3, 2];
  private bracketSizes = [[2, 2], [2, 2], [2, 2], [4], [2]];
  private happinessMarkers = [[8, 7], [6, 5], [4, 3], [2], [1]];
  private foodConsumptions = [-6, -4, -3, -2, -1];
  
  private maxHappiness = 8;

  constructor(private happinessService: HappinessService, private yellowCubeService: YellowCubeService, private foodService: FoodService) { 

    this.createSections();
    this.activeSection = this.sections[this.sectionIndex];
    this.attachListeners();
  }

  ngOnInit() {
    for(let i = 0; i < this.initialCapacity; i++) {
      this.add()
    }
  }

  /**
   * Attaches listeners
   */
  private attachListeners() {
    // Listen to when the happiness rating changes
    this.happinessService.ratingChanged$.subscribe( newRating => {
      this.handleHappinessChanged(newRating);
    });

    // Listen to when a population is gained
    this.yellowCubeService.populationGained$.subscribe( () => {
      this.remove();
    });

    // Listen to when a yellow cube is gained
    this.yellowCubeService.yellowCubeGained$.subscribe( () => {
      this.add();
    });
  }

  /**
   * Adds a yellow cube to the bank
   */
  private add() {
    if(this.activeSection.isFull()) {
      // the active section should be the next section
      this.sectionIndex++;
      this.activeSection = this.sections[this.sectionIndex];
      
      if (!this.activeSection) {
        this.appendToLastSection();        
        return;
      }
    }
    // Update the cost to be the cost of the active section
    this.yellowCubeService.setCostForCube(this.activeSection.getFoodCost());
    this.activeSection.add();
    this.updateDiscontentWorkers(this.happinessService.getRating());

    // Update food consumption - the food consumption is the consumption of the next section.
    // Hence adding + 1 to get the food consumption of the next section
    let foodConsumption = this.foodConsumptions[this.sectionIndex + 1];
    foodConsumption ? this.foodService.setConsumption(foodConsumption) : this.foodService.setConsumption(0);
  }

  /**
   * Appends a cube to the last section
   */
  private appendToLastSection() {
    this.activeSection = this.getLastSection();
    this.sectionIndex = this.sections.indexOf(this.activeSection);
    this.activeSection.append();

    this.yellowCubeService.setCostForCube(this.activeSection.getFoodCost());
    this.foodService.setConsumption(0);
    this.updateDiscontentWorkers(this.happinessService.getRating());
  }

  /**
   * Gets the last section
   */
  private getLastSection() {
    return this.sections[this.sections.length - 1];
  }

  /**
   * Removes a yellow cube from the bank
   */
  private remove() {
    if(!this.activeSection) {
      return;
    }

    // Update the cost to be the cost of the active section
    this.yellowCubeService.setCostForCube(this.activeSection.getFoodCost());
    this.activeSection.remove();
    this.updateDiscontentWorkers(this.happinessService.getRating());

    if (this.activeSection.isEmpty()) {
      this.foodService.setConsumption(this.activeSection.getConsumption());
      this.sectionIndex--;
      this.activeSection = this.sections[this.sectionIndex];
    }
  }

  /**
   * Handles when the happiness rating changes
   * 
   * @param newRating the new happiness rating
   */
  private handleHappinessChanged(newRating) {
    this.moveHappinessMarker(newRating);
    this.updateDiscontentWorkers(newRating);
  }

  /**
   * Moves the happiness marker to reflect the happiness rating
   * 
   * @param newRating the happiness rating
   */
  private moveHappinessMarker(newRating) {

    let happiness = this.boundHappiness(newRating);
    this.clearHappinessMarkers();

    let sectionIndex, bracketIndex;
    for(let i = 0; i < this.happinessMarkers.length; i++) {
      let markers = this.happinessMarkers[i];
      let index = markers.indexOf(happiness);
      if (index !== -1) {
        sectionIndex = i;
        bracketIndex = index;
        break;
      }
    }

    let section =  this.sections[sectionIndex];
    if (section) {
      section.setHappiness(bracketIndex);
    }
  }

  /**
   * Clears happiness markers
   */
  private clearHappinessMarkers() {
    this.sections.forEach(function(section) {
      section.clearHappiness();
    });
  }

  /**
   * Binds the happiness rating to between zero and the maximum happiness
   * 
   * @param happiness the happiness rating
   */
  private boundHappiness(happiness) {
    return Math.min(this.maxHappiness, happiness);
  }

  private updateDiscontentWorkers(happinessRating) {
    let emptyBrackets = this.getEmptyPopulationBrackets();
    let difference = emptyBrackets - happinessRating;
    if (difference >= 0) {
      this.yellowCubeService.updateDiscontentWorkers(difference);
    }
  }

  private getEmptyPopulationBrackets() {
    let emptyBrackets = 0;
    this.sections.forEach((section) => {
      let emptyBracketsInSection = section.getNumberOfEmptyBrackets();
      emptyBrackets += emptyBracketsInSection;
    });  
    return emptyBrackets;
  }

  /**
   * Creates sections
   */
  private createSections() {
    for (let i = 0; i < this.foodCosts.length; i++) {
      this.sections.push(new YellowBankSection(this.foodCosts[i], this.bracketSizes[i], 
        this.happinessMarkers[i], this.foodConsumptions[i] ));
    }
  }
}
