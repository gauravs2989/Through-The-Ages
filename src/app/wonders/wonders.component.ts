import { WonderHostDirective } from './wonder-host.directive';
import { NameUtils } from 'common/utils/name-utils';
import { WondersService } from 'common/services/wonders.service';
import { CardService } from 'cards/card.service';
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { WondersComponentService } from './wonders.components.service';
import { Wonder } from './wonder';

@Component({
  selector: 'wonders',
  templateUrl: './wonders.component.html',
  styleUrls: [
    './wonders.component.css',
    './../common/styles/tokens.css'
  ]
})
export class WondersComponent {

  @ViewChild(WonderHostDirective) wonderHost: WonderHostDirective;

  private currentIndex : number = -1;
  private wonders = ["pyramids", "colossus", "hanginggardens", "libraryofalexandria"];
  private mostRecentWonder;

  constructor(private cardService: CardService, private wonderService: WondersService, 
    private wondersComponentService: WondersComponentService, 
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  private startConstruction() {
    this.currentIndex = (this.currentIndex + 1) % this.wonders.length;
    let wonder = this.cardService.get(this.wonders[this.currentIndex]);
    this.wonderService.setWonderUnderConstruction(wonder);
  }

  private completeWonder() {
    this.constructWonder();
    this.wonderService.updateCompletedWonders();
  }

  private constructWonder() {
    let wonder = this.getWonderUnderConstruction();
    let component = this.wondersComponentService.getComponent(wonder.getName());

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef = this.wonderHost.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<Wonder>componentRef.instance).card = wonder;
  }

  private getWonderUnderConstruction() {
    return this.wonderService.getWonderUnderConstruction();
  }

  private get stages() {
    return this.wonderService.getStages();
  }

  private getName(wonderCard) {
    let cardName = wonderCard.getName();
    return cardName ? NameUtils.getClassName(cardName) : "";
  }

  private areAnyWondersCompleted() {
    return this.wonderService.getCompletedWonders().length > 0;
  }

  private getMostRecentWonder() {
    return this.wonderService.getMostRecentWonder();
  }

  private getDisplayIndex() {
    return this.wonderService.getCompletedWonders().length - 1;
  }

  private canBuild() {
    return this.getBuildOptions().length > 0;
  }

  private getBuildOptions() {
    return this.wonderService.getBuildOptions();
  }

  private buildStage(option) {
    console.log(option);
    this.wonderService.build(option);

    if (this.getBuiltStages() === this.stages.length) {
      this.completeWonder();
    }
  }

  private getBuiltStages() {
    return this.wonderService.getBuiltStages();
  }
}