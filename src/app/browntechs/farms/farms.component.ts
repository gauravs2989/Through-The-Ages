import { BlueCubeService } from 'common/services/blue-cube.service';
import { DiscoveredTechsService } from 'common/services/discovered-techs.service';
import { FoodService } from 'common/services/food.service';
import { TransactionService } from 'common/services/transaction.service';
import { CardService } from 'cards/card.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent {
  @Input('stack') stack;
  constructor(private cardService: CardService, private discoveredTechsService: DiscoveredTechsService, 
    private foodService: FoodService, private blueCubeService: BlueCubeService, private transactionService: TransactionService) {
    this.initialize();
    
    this.blueCubeService.roundFinished$.subscribe( () => {
      this.produce();
    });
  }

  private initialize() {
    let initialCard = this.cardService.get("agriculture");
    this.discoveredTechsService.discover(initialCard);
  
    this.buildUnit(initialCard);
    this.buildUnit(initialCard);
  }

  private onUnitBuilt(card) {
    let currentFoodRating = this.foodService.getRating();
    let newRating = currentFoodRating + card.getRating().food;
    this.foodService.updateRating(newRating);
  }

  private onUnitDestroyed(card) {
    let currentFoodRating = this.foodService.getRating();
    let newRating = currentFoodRating - card.getRating().food;
    this.foodService.updateRating(newRating);
  }

  private buildUnit(card) {
    card.build();
    this.onUnitBuilt(card);
  }

  private produce() {
    // produce one blue cube per yellow cube on the stack
    this.stack.forEach((card)=> {
      let yellowCubesOnCard = card.getYellowCubes().length;
      card.addBlueCubesToCard(yellowCubesOnCard);
      this.blueCubeService.removeBlueCubes(yellowCubesOnCard);
    });

    // pay back food equal to the consumption
    let consumption = this.foodService.getConsumption();
    this.foodService.payFood(-consumption);

    // update the score
    this.updateFood();
  }

  private updateFood() {
    let existingFood = this.foodService.getScore();
    let newFood = existingFood + this.foodService.getRating();
    this.foodService.updateScore(newFood);
  }

  //// Testing
  private discover() {
    let newCard = this.cardService.get("irrigation");
    this.discoveredTechsService.discover(newCard);
    this.discoveredTechsService.discover(this.cardService.get("selectivebreeding"));
  }
}
