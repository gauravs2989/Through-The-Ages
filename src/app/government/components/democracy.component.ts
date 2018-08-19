import { CultureService } from 'common/services/culture.service';
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
export class DemocracyComponent extends BaseGovernmentComponent implements AfterViewInit, OnDestroy {

    constructor(private actionService: ActionsService, private cultureService: CultureService) {
        super(actionService);
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        setTimeout(() => {
            this.updateCultureRating();
        })
    }

    private updateCultureRating() {
        let currentRating = this.cultureService.getRating();
        let newRating = currentRating + this.card.getRatings().culture;
        this.cultureService.updateRating(newRating);
    }
}