import { ActionsService } from '../common/services/actions.service';
import { Government } from './government';
import { GovernmentService } from './government.service';
import { GovernmentHostDirective } from './government-host.directive';
import { GovernmentCard } from '../cards/GovernmentCard';
import { DiscoveredTechsService } from '../common/services/discovered-techs.service';
import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { CardService } from '../cards/card.service';


@Component({
  selector: 'government',
  templateUrl: './government.component.html',
  styleUrls: [
    './government.component.css'
  ]
})
export class GovernmentComponent implements OnInit {
  private card;
  private currentGovernment = null;
  @ViewChild(GovernmentHostDirective) governmentHost: GovernmentHostDirective;

  constructor(private cardService: CardService, private discoveredTechsService: DiscoveredTechsService, private actionsService: ActionsService,
    private componentFactoryResolver: ComponentFactoryResolver, private governmentService: GovernmentService) {   
  }

  ngOnInit() {
    this.discoveredTechsService.techDiscovered$.subscribe((discoveredTech) => {
      if (discoveredTech instanceof GovernmentCard) {
          this.card = discoveredTech;
          this.installGovernment();
        }
    });

    setTimeout(()=> {
      let initialCard = this.cardService.get("despotism");
      this.discoveredTechsService.updateGovernment(initialCard);
    });
  }

  private installGovernment() {

    if (this.currentGovernment) {
      this.currentGovernment.destroy();
    }

    let componentToCreate = this.governmentService.getComponent(this.card.name);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToCreate);

    let viewContainerRef = this.governmentHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<Government>componentRef.instance).card = this.card;

    this.currentGovernment = componentRef;
  }
}
