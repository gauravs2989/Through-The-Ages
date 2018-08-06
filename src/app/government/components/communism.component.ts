import { HappinessService } from '../../common/services/happiness.service';
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
export class CommunismComponent extends BaseGovernmentComponent implements AfterViewInit, OnDestroy {

    constructor(private actionService: ActionsService, private happinessService: HappinessService) {
        super(actionService);
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        setTimeout(() => {
            this.updateHappiness();
        })
    }

    private updateHappiness() {
        let currentRating = this.happinessService.getRating();
        let newRating = currentRating + this.card.getRatings().happiness;
        this.happinessService.updateRating(newRating);
    }
}