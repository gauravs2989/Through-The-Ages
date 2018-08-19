import { NameUtils } from 'common/utils/name-utils';
import { StrengthService } from 'common/services/strength.service';
import { DiscoveredTechsService } from 'common/services/discovered-techs.service';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    templateUrl: '../../common/templates/leader.template.html',
    styleUrls: [
        '../../common/styles/cards.css',
        './../leader.component.css'
    ]
})
export class AlexanderTheGreatComponent implements AfterViewInit, OnDestroy {
    card;
    private unitBuiltSubscription: ISubscription;
    private unitDestroyedSubscription: ISubscription;

    constructor(private strengthService: StrengthService, private discoveredTechsService: DiscoveredTechsService) {
        
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.addListener();
            this.updateStrength(1);
        });
    }

    ngOnDestroy() {
        this.unitBuiltSubscription.unsubscribe();
        this.unitDestroyedSubscription.unsubscribe();
        this.updateStrength(-1);
    }

    get classname() {
        return NameUtils.getClassName(this.card.name);
    }

    /**
     * Adds a listener to when a new unit is built or destroyed
     */
    private addListener() {
        this.unitBuiltSubscription = this.strengthService.unitBuilt$.subscribe( (card) => {
           this.updateStrengthFromCard(card, 1); 
        });

        this.unitDestroyedSubscription = this.strengthService.unitDestroyed$.subscribe( (card) => {
            this.updateStrengthFromCard(card, -1);
        })
    }

    /**
     * Update the strength when Alexander is first installed.
     */
    private updateStrength(multiplier) {
        // get all the types of military technologies discovered
        let units = this.discoveredTechsService.getMilitaryTechnologies();
        
        // compute overall strength bonus
        let strength = 0;
        for (let type in units) {
            if (units.hasOwnProperty(type)) {
                let cards = units[type];
                cards.forEach((card) => {
                    strength += (multiplier * card.getYellowCubes().length);
                });
            }
        }
        
        // update strength
        let currentStrength = this.strengthService.getNonTacticalStrength();
        let newStrength = currentStrength + strength;
        this.strengthService.setNonTacticalStrength(newStrength);
    }

    /**
     * Provide/retract Alexander's strength bonus to the card
     * 
     * @param card the card on which the unit it built/destroyed
     * @param multiplier +1 if the unit was built, -1 if it was destroyed
     */
    private updateStrengthFromCard(card, multiplier) {
        let currentStrength = this.strengthService.getNonTacticalStrength();
        let newStrength = currentStrength + (multiplier * this.card.getRating().strength);
        this.strengthService.setNonTacticalStrength(newStrength);
    }
}