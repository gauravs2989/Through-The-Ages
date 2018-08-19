import { BlueCubeService } from 'common/services/blue-cube.service';
import { ResourceService } from 'common/services/resource.service';
import { DiscoveredTechsService } from 'common/services/discovered-techs.service';
import { CardService } from 'cards/card.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mines',
  templateUrl: './mines.component.html',
  styleUrls: ['./mines.component.css']
})
export class MinesComponent implements OnInit {
  @Input('stack') stack;
  constructor(private cardService: CardService, private discoveredTechsService: DiscoveredTechsService, 
    private resourceService: ResourceService, private blueCubeService: BlueCubeService) {
    this.initialize();

    this.blueCubeService.roundFinished$.subscribe( () => {
      this.produce();
    });
  }

  ngOnInit() {
  }

  onUnitBuilt(card) {
    let currentRating = this.resourceService.getRating();
    let newRating = currentRating + card.getRating().resources;
    this.resourceService.updateRating(newRating);
  }

  onUnitDestroyed(card) {
    let currentRating = this.resourceService.getRating();
    let newRating = Math.max(0, currentRating - card.getRating().resources);
    this.resourceService.updateRating(newRating);
  }

  private discover() {
    let newCard = this.cardService.get("coal");
    this.discoveredTechsService.discover(newCard);
  }

  private produce() {
    // produce one blue cube for every yellow cube in the stack
    this.stack.forEach((card)=> {
      let yellowCubesOnCard = card.getYellowCubes().length;
      card.addBlueCubesToCard(yellowCubesOnCard);
      this.blueCubeService.removeBlueCubes(yellowCubesOnCard);
    });

    this.updateResources();
  }

  private updateResources() {
    let existingResources = this.resourceService.getScore();
    this.resourceService.updateScore(existingResources + this.resourceService.getRating());
  }

  private initialize() {
    let initialCard = this.cardService.get("bronze");
    this.discoveredTechsService.discover(initialCard);

    this.buildUnit(initialCard);
    this.buildUnit(initialCard);
  }

  private buildUnit(card) {
    card.build();
    this.onUnitBuilt(card);
  }
}
