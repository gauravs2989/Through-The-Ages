import { ScienceService } from 'common/services/science.service';
import { StrengthService } from 'common/services/strength.service';
import { ActionsService } from 'common/services/actions.service';
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
export class FundamentalismComponent extends BaseGovernmentComponent implements AfterViewInit, OnDestroy {

    constructor(private actionService: ActionsService, private strengthService: StrengthService, private scienceService: ScienceService) {
        super(actionService);
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        setTimeout(() => {
            this.updateStrength();
            this.updateScience();
        })
    }

    private updateStrength() {
        let currentRating = this.strengthService.getNonTacticalStrength();
        let newRating = currentRating + this.card.getRatings().strength;
        this.strengthService.setNonTacticalStrength(newRating);
    }

    private updateScience() {
        let currentRating = this.scienceService.getRating();
        let newRating = currentRating + this.card.getRatings().science;
        this.scienceService.updateRating(newRating);
    }
}