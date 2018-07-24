import { FoodService } from './../../common/services/food.service';
import { ResourceService } from './../../common/services/resource.service';
import { BlueCubeService } from './../../common/services/blue-cube.service';
import { DiscoveredTechsService } from './../../common/services/discovered-techs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brown-techs',
  templateUrl: './brown-techs.component.html',
  styleUrls: ['./brown-techs.component.css']
})
export class BrownTechsComponent implements OnInit {
  private stacks = [];

  constructor(private discoveredTechsService: DiscoveredTechsService, private blueCubeService: BlueCubeService, 
    private foodService: FoodService, private resourceService: ResourceService) {
  }

  ngOnInit() { 
  }

  private getFarmStack() {
    return this.discoveredTechsService.getDiscoveredTechs("farm");
  }

  private getMineStack() {
    return this.discoveredTechsService.getDiscoveredTechs("mine");
  }

  private produce() {
    this.blueCubeService.onRoundFinished();
  }
}