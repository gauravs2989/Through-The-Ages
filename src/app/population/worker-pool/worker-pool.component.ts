import { Component, OnInit } from '@angular/core';
import { Token } from '../../common/Token';
import { YellowCubeService } from '../../common/services/yellow-cube.service';

@Component({
  selector: 'worker-pool',
  templateUrl: './worker-pool.component.html',
  styleUrls: [
    './worker-pool.component.css',
    './../../common/styles/tokens.css'
  ]
})
export class WorkerPoolComponent {
  private static UNUSED_WORKER_DESCRIPTION : string = "Unused Worker";
  
  constructor(private yellowCubeService: YellowCubeService) { }

  get description() {
    return this.isEmpty() ? "" : WorkerPoolComponent.UNUSED_WORKER_DESCRIPTION;
  }
  
  private add() {
    this.addToken();
  }

  private addToken() {
    this.yellowCubeService.addNewWorker();
  }

  private isEmpty() {
    return !(this.yellowCubeService.getAvailableWorkers().length > 0);
  }

  private getTokens() {
    let tokens = this.yellowCubeService.getAvailableWorkers();
    return tokens;
  }

  private canIncreasePopulation() {
    // return this.yellowCubeService.isPopulationAvailable();
    return true;
  }

  private getDiscontentWorkers() {
    return this.yellowCubeService.getDiscontentWorkers();
  }
}
