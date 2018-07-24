import { ResourceService } from './../../common/services/resource.service';
import { BuildService } from './../../common/services/build.service';
import { UpgradeService } from './../../common/services/upgrade.service';
import { CardTypes } from './../card-types';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActionsService } from '../../common/services/actions.service';
import { NameUtils } from '../../common/utils/name-utils';

@Component({
  selector: 'unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css',     
    './../../common/styles/tokens.css'
  ]
})
export class UnitCardComponent implements OnInit {
  @Input('card') card;
  @Output('unitBuilt') unitBuilt = new EventEmitter();
  @Output('unitDestroyed') unitDestroyed = new EventEmitter();
  
  constructor(private actionsService: ActionsService, private resourceService: ResourceService,
    private upgradeService: UpgradeService, private buildService: BuildService) { }

  ngOnInit() {
    this.card.unitBuilt = this.unitBuilt;
    this.card.unitDestroyed = this.unitDestroyed;
  }

  private getYellowCubes() {
    return this.card.getYellowCubes();
  }

  private getBlueCubes() {
    return this.card.getBlueCubes();
  }

  private buildUnit() {
    this.buildService.build(this.card);
    this.resourceService.payResources(this.card.getResourceCost());
    this.updateActions();
  }

  private destroyUnit() {
    this.buildService.destroy(this.card);
    this.updateActions();
  }

  private upgradeUnit(upgradedCard) {
    this.upgradeService.upgradeCard(this.card, upgradedCard);
    this.updateActions();
  }

  private hasUnits() {
    return (this.getYellowCubes().length > 0);
  }

  private canBuild() {
    return this.buildService.canBuild(this.card);
  }

  private canUpgrade() {
    return this.getAvailableUpgrades().length > 0;
  }

  private getAvailableUpgrades() {
    return this.upgradeService.getUpgrades(this.card);
  }

  private updateActions() {
    this.isMilitaryCard() ? this.updateMilitaryActions() : this.updateCivilActions();
  }

  private isMilitaryCard() {
    return (this.card.type === CardTypes.INFANTRY || 
            this.card.type === CardTypes.CAVALRY || 
            this.card.type === CardTypes.ARTILLERY || 
            this.card.type === CardTypes.AIRFORCES);
  }

  private updateMilitaryActions() {
    let actions = this.actionsService.getMilitaryActions();
    let newActions = actions - 1;
    this.actionsService.updateMilitaryActions(newActions);
  }

  private updateCivilActions() {
    let civilActions = this.actionsService.getCivilActions();
    if (civilActions) { 
      // if there are civil actions to update, update them first
      let newActions = civilActions - 1;
      this.actionsService.updateCivilActions(newActions);
    } else {
      // if we've run out of civil actions, update the optional civil actions, 
      // and consequently the military action which is being used as a substitute
      let optionalCivilActions = this.actionsService.getOptionalCivilActions();
      if (optionalCivilActions) {
        this.actionsService.setOptionalCivilActions(optionalCivilActions - 1);
        this.updateMilitaryActions();
      }
    }
  }

  private isActionAvailable() {
    if (this.isMilitaryCard()) {
      return this.actionsService.getMilitaryActions() > 0;
    } else {
      return ( this.actionsService.getCivilActions() > 0 || this.actionsService.getOptionalCivilActions() > 0 );
    }
  }
}