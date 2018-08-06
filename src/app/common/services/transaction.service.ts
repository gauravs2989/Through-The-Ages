import { CardTypes } from '../../cards/card-types';
import { DiscoveredTechsService } from './discovered-techs.service';
import { BlueCubeService } from './blue-cube.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionService {

  constructor(private blueCubeService: BlueCubeService, private discoveredTechsService: DiscoveredTechsService) { }
  
  /**
   * Spend the amount specified.
   * 
   * @param amount the amount to spend
   * @param cardType the card type (e.g. farm, mine) to use for spending
   */
  public spend(amount: number, cardType: string) {
    let cubesToAddBack = 0;
    let techs = this.discoveredTechsService.getDiscoveredTechs(cardType);
    let denominations = this.getDenominationsFromCardType(techs, cardType);

    let reversedArray = techs.slice().reverse();
    let reversedDenominations = denominations.slice().reverse();
    
    let paymentInfo = this.payAmountUsingDenominations(amount, reversedArray, reversedDenominations);
    cubesToAddBack += paymentInfo.cubesNeeded; 

    // if there is still some left over amount, we need to over pay and get some change back
    if (paymentInfo.remainingAmount) {
      paymentInfo = this.overPay(paymentInfo.remainingAmount, reversedArray, reversedDenominations);
      cubesToAddBack += paymentInfo.cubesNeeded;
    }
    
    // add the blue cubes to the bank
    this.blueCubeService.addBlueCubes(cubesToAddBack);

    // provide the change
    if (paymentInfo.remainingAmount < 0) {
      let changeAmount = -paymentInfo.remainingAmount;
      this.gain(changeAmount, cardType);
    }
  }

  /**
   * Gain the amount specified
   * 
   * @param amount the amount to gain
   * @param cardType the card type (e.g farm, mine) to use for gaining
   */
  public gain(amount: number, cardType: string) {

    let techs = this.discoveredTechsService.getDiscoveredTechs(cardType);
    let denominations = this.getDenominationsFromCardType(techs, cardType);

    let reversedArray = techs.slice().reverse();
    let reversedDenominations = denominations.slice().reverse();
    
    let cubesToRemove = this.gainAmount(amount, reversedArray, reversedDenominations);
    this.blueCubeService.removeBlueCubes(cubesToRemove);
  }

  private getDenominationsFromCardType(techs, type) {
    let denominations = [];
    switch(type) {
      case CardTypes.FARM:
        techs.forEach((tech) => {
          denominations.push(tech.getRating().food);
        });
        break;
      case CardTypes.MINE:
        techs.forEach((tech) => {
          denominations.push(tech.getRating().resources);
        });
        break;
    }
    return denominations;
  }

   /**
   * 
   * @param amount The amount to pay
   * @param techs The food technologies
   * @param denominations The denominations available
   */
  private payAmountUsingDenominations(amount, techs, denominations) {
    let cubesNeeded = 0;
    // First, try and pay the exact amount using the denominations available
    for (let i = 0; i < techs.length; i++) {
      let currentTech = techs[i];
      let denomination = denominations[i];
      let availableCubes = currentTech.getBlueCubes().length;
      
      // These are the number of cubes we need of this denomination to pay the amount
      let numCubesNeeded = Math.floor(amount/denomination);
    
      // if the number of cubes needed are more than the available cubes, then use up all cubes we've got (this may be 0)
      if (numCubesNeeded > availableCubes) {
        numCubesNeeded = availableCubes;
      }

      // Remove the cubes from the card, and note that we need to add those many back to the bank
      currentTech.removeBlueCubes(numCubesNeeded);
      cubesNeeded += numCubesNeeded;

      amount -= numCubesNeeded * denomination;
      // if we've reached the amount to pay, then we stop
      if (!amount) {
        break;
      }
    }

    return {
      remainingAmount: amount,
      cubesNeeded: cubesNeeded
    };
  }

  private overPay(amount, techs, denominations) {
    let cubesNeeded = 0;
    // Determine the cubes needed to overpay.
    for (let i = 0; i < techs.length; i++) {
      let currentTech = techs[i];
      let denomination = denominations[i];
      let availableCubes = currentTech.getBlueCubes().length;
      let numCubesNeeded; 

      if (availableCubes) {
        numCubesNeeded = Math.ceil(amount/denomination);
        currentTech.removeBlueCubes(numCubesNeeded);

        cubesNeeded += numCubesNeeded;

        amount -= numCubesNeeded * denomination;
        // When remaining balance becomes negative, we've overpaid and now need to get some change back
        if (amount < 0) {
          break;
        }
      }
    }

    return {
      remainingAmount: amount,
      cubesNeeded: cubesNeeded
    };
  }

  private gainAmount(amount, techs, denominations) {
    let cubesNeeded = 0;
    for (let i = 0; i < techs.length; i++) {
      let currentDenomination = techs[i];
      let denomination = denominations[i];

      let numCubesToAdd = Math.floor(amount/denomination);
      if (numCubesToAdd) {
        currentDenomination.addBlueCubesToCard(numCubesToAdd);
        amount -= numCubesToAdd * denomination;
        cubesNeeded += numCubesToAdd;
      }

      if (!amount) {
        break;
      }
    }

    return cubesNeeded;
  }
}
