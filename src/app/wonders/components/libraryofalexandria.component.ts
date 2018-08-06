import { ScienceService } from '../../common/services/science.service';
import { CultureService } from '../../common/services/culture.service';
import { Component, AfterViewInit } from '@angular/core';
@Component({
    template: '',
    styleUrls: []
})
export class LibraryOfAlexandriaComponent implements AfterViewInit {
    
    card: any;

    constructor(private scienceService: ScienceService, private cultureService: CultureService) {}

    ngAfterViewInit() {
        setTimeout(() => {
            this.updateRatings();
        });
    }

    private updateRatings() {
        this.scienceService.updateRating(this.scienceService.getRating() + this.card.getRatings().science);
        this.cultureService.updateRating(this.cultureService.getRating() + this.card.getRatings().culture);
    }
}