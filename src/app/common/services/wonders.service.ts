import { BlueCubeService } from './blue-cube.service';
import { BuildOption } from 'wonders/build-option';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';

@Injectable()
export class WondersService {

  private wonderUnderConstruction = null;
  private mostRecentWonder = null;
  private completedWonders = [];

  private allowedStages: number;
  private buildOptions: BuildOption[];

  constructor(private resourceService: ResourceService, private blueCubeService: BlueCubeService) {

    this.resourceService.scoreChanged$.subscribe(() => {
      this.generateBuildOptions();
    });

    this.allowedStages = 2;
  }

  setWonderUnderConstruction(wonderCard) {
    this.wonderUnderConstruction = wonderCard;
    this.generateBuildOptions();
  }

  getWonderUnderConstruction() {
    return this.wonderUnderConstruction;
  }

  getStages() {
    return this.wonderUnderConstruction ? this.wonderUnderConstruction.getStages() : [];
  }

  getName() {
    return this.wonderUnderConstruction ? this.wonderUnderConstruction.getName() : null;    
  }

  getCompletedWonders() {
    return this.completedWonders;
  }

  updateCompletedWonders() {
    this.completedWonders.push(this.wonderUnderConstruction);
    this.mostRecentWonder = this.wonderUnderConstruction;

    this.blueCubeService.addBlueCubes(this.mostRecentWonder.getStages().length);

    this.wonderUnderConstruction = null;
  }

  getMostRecentWonder() {
    return this.mostRecentWonder;
  }

  getBuildOptions() {
    console.log(this.buildOptions);
    return this.buildOptions;
  }

  build(option: BuildOption) {
    this.wonderUnderConstruction.buildStage(option.stages);
    this.resourceService.payResources(option.resourceCost);
    
    this.blueCubeService.removeBlueCubes(option.stages);
    this.generateBuildOptions();
  }

  getBuiltStages() {
    return this.wonderUnderConstruction.getBuiltStages();
  }

  private generateBuildOptions() {

    if (!this.getWonderUnderConstruction()) {
      return;
    }

    this.buildOptions = [];
    for (let i = 1; i <= this.allowedStages; i++) {
      let nextStages = this.wonderUnderConstruction.getNextStagesToBuild(i);
      if (nextStages) {
        let buildOption = this.createBuildOption(nextStages);
        if (buildOption.resourceCost <= this.resourceService.getScore()) {
          this.buildOptions.push(buildOption);
        }
      }
    }
  }

  private createBuildOption(stages) {
    let buildOption: BuildOption = {
      actions: 1,
      stages: stages.length,   
      resourceCost: stages.reduce((total, num) => {
        return total + num;
      })
    };
    return buildOption;
  }
}