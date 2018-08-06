import { CultureService } from '../../common/services/culture.service';
import { HappinessService } from '../../common/services/happiness.service';
import { StrengthService } from '../../common/services/strength.service';
import { ActionsService } from '../../common/services/actions.service';
import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { BaseGovernmentComponent } from './basegovernment.component';
@Component({
    templateUrl: './../../common/templates/government.template.html',
    styleUrls: [
        './../government.component.css',
        './../../common/styles/cards.css',
        './../../common/styles/tokens.css'
    ]
})
export class TheocracyComponent extends BaseGovernmentComponent implements AfterViewInit, OnDestroy {

    constructor(private actionService: ActionsService, private strengthService: StrengthService, 
        private happinessService: HappinessService, private cultureService: CultureService) {
        super(actionService);
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        setTimeout(() => {
            this.updateCultureRating();
            this.updateStrength();
            this.updateHappiness();
        })
    }

    private updateCultureRating() {
        let currentRating = this.cultureService.getRating();
        let newRating = currentRating + this.card.getRatings().culture;
        this.cultureService.updateRating(newRating);
    }

    private updateStrength() {
        let currentStrength = this.strengthService.getNonTacticalStrength();
        let newStrength = currentStrength + this.card.getRatings().strength;
        this.strengthService.setNonTacticalStrength(newStrength);
    }

    private updateHappiness() {
        let currentHappiness = this.happinessService.getRating();
        let newHappiness = currentHappiness +  this.card.getRatings().happiness;
        this.happinessService.updateRating(newHappiness);
    }
}