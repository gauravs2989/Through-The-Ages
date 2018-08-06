import { ColonizationService } from '../../common/services/colonization.service';
import { StrengthService } from '../../common/services/strength.service';
import { Component, AfterViewInit } from '@angular/core';
@Component({
    template: '',
    styleUrls: []
})
export class ColossusComponent implements AfterViewInit {
    
    card: any;

    constructor(private strengthService: StrengthService, 
        private colonizationService: ColonizationService) {}

    ngAfterViewInit() {
        setTimeout(() => {
            this.updateRatings();
        });
    }

    private updateRatings() {
        let cardRating = this.card.getRatings();
        this.strengthService.setNonTacticalStrength(this.strengthService.getNonTacticalStrength() + cardRating.strength);
        this.colonizationService.updateScore(this.colonizationService.getScore() + cardRating.colonization);
    }
}