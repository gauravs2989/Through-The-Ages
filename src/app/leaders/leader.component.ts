import { LeaderHostDirective } from './leader-host.directive';
import { LeadersComponentService } from './leaders-component.service';
import { CardService } from 'cards/card.service';
import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Leader } from './leader';
import { LeaderService } from 'common/services/leader.service';

@Component({
  selector: 'leader',
  templateUrl: './leader.component.html',
  styleUrls: [
    './leader.component.css',
    './../common/styles/cards.css'
  ]
})
export class LeaderComponent implements OnInit {
  private currentLeader = null;
  
  private static DESTROY_LABEL = "Destroy";
  private static ELECT_LABEL = "Elect";

  @ViewChild(LeaderHostDirective) leaderHost: LeaderHostDirective;
  constructor(
    private cardService: CardService, 
    private leadersComponentService: LeadersComponentService, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private leaderService: LeaderService
    ) {
  }

  ngOnInit() {
    this.electLeader(null);
  }

  elect() {
    let leader = this.cardService.get("hammurabi");
    this.electLeader(leader);
  }

  destroy() {
    if (this.currentLeader) {
      this.currentLeader.destroy();
    }
    this.electLeader(null);
  }

  get value() {
    return this.currentLeader ? LeaderComponent.DESTROY_LABEL : LeaderComponent.ELECT_LABEL;
  }

  get callback() {
    return this.currentLeader ? this.destroy() : this.elect();
  }

  private electLeader(leader) {
    this.createLeaderComponent(leader);
  }

  private createLeaderComponent(leader) {
    let name = leader ? leader.name : null;
    
    let componentToCreate = this.leadersComponentService.getComponent(name);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToCreate);

    let viewContainerRef = this.leaderHost.viewContainerRef;
    viewContainerRef.clear();
    
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<Leader>componentRef.instance).card = (leader ? leader : null);

    this.currentLeader = (leader ? componentRef : null);
    this.leaderService.setCurrentLeader(this.currentLeader ? this.currentLeader.instance.card : null);
  }
}