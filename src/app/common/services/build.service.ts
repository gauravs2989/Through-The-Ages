import { YellowCubeService } from './yellow-cube.service';
import { ResourceService } from './resource.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BuildService {

  constructor(private resourceService: ResourceService, private yellowCubeService: YellowCubeService) { }
  
  /**
   * Build a unit on the provided card
   * @param card the card on which a unit is to be built
   */
  build(card, isSetup? : boolean) {
    card.build();
    if (!isSetup) {
      this.yellowCubeService.removeUnusedWorker();
    }
  }

  /**
   * Disbands a unit from the provided card and adds it as an unused worker
   * @param card the card from which a unit is to be disbanded
   */
  destroy(card) {
    card.destroy();
    this.yellowCubeService.addDisbandedWorker();
  }

  /**
   * Determines if it is possible to build a unit on the card
   * @param card the card to build
   */
  canBuild(card) {
    return (this.yellowCubeService.getAvailableWorkers().length !== 0 && 
           this.resourceService.getScore() >= card.getResourceCost()) ;
  }
}
