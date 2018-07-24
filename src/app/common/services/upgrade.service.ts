import { ResourceService } from './resource.service';
import { Injectable } from '@angular/core';
import { DiscoveredTechsService } from './discovered-techs.service';

@Injectable()
export class UpgradeService {

  constructor(private discoveredTechsService: DiscoveredTechsService, private resourceService: ResourceService) {
  }

  /**
   * Get a list of possible upgrades for this card
   * 
   * @param card the card for which upgrades are requested
   * @return a list of possible upgrades
   */
  getUpgrades(card) {
    let discoveredTechs = this.discoveredTechsService.getDiscoveredTechs(card.getType());
    let upgrades = [];
    for (let i = 0; i < discoveredTechs.length; i++) {
      let cardInStack = discoveredTechs[i];
      if (cardInStack.getLevel() > card.getLevel() && this.canAffordUpgrade(card, cardInStack) && card.getYellowCubes().length > 0) {
        upgrades.push(cardInStack);
      }
    }
    return upgrades;
  }

  /**
   * Upgrade a card to another
   * 
   * @param source the source card from where to upgrade
   * @param destination the destination card to which to upgrade
   */
  upgradeCard(source, destination) {
    source.destroy();
    destination.build();
    this.resourceService.payResources(destination.getResourceCost() - source.getResourceCost());
  }

  /**
   * Determine if we can afford to upgrade from source to destination, based on the resources available
   * 
   * @param source the source card from where to upgrade
   * @param destination the destination card to which to upgrade
   */
  private canAffordUpgrade(source, destination) {
    let sourceCost = source.getResourceCost();
    let destinationCost = destination.getResourceCost();
    let upgradeCost = destinationCost - sourceCost;
    return this.resourceService.getScore() >= upgradeCost;
  }
}
