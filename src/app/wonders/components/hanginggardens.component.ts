import { CultureService } from './../../common/services/culture.service';
import { HappinessService } from '../../common/services/happiness.service';
import { Component, AfterViewInit } from '@angular/core';

@Component({
    template: '',
    styleUrls: []
})
export class HangingGardensComponent implements AfterViewInit {
    
    card: any;

    constructor(private cultureService: CultureService, private happinessService: HappinessService) {}

    ngAfterViewInit() {
        setTimeout(() => {
            this.updateRatings();
        });
    }

    private updateRatings() {
        this.cultureService.updateRating(this.cultureService.getRating() + this.card.getRatings().culture);
        this.happinessService.updateRating(this.happinessService.getRating() + this.card.getRatings().happiness);
    }
}