import { Component, AfterViewInit } from '@angular/core';
import { ActionsService } from '../../common/services/actions.service';
@Component({
    template: '',
    styleUrls: []
})
export class PyramidsComponent implements AfterViewInit {
    
    card: any;
    
    constructor(private actionsService: ActionsService) {}

    ngAfterViewInit() {
        setTimeout(() => {
            this.updateRatings();
        });
    }

    private updateRatings() {
        let currentCivilActions = this.actionsService.getCivilActions();
        let newCivilActions = currentCivilActions + this.card.getRatings().civilActions;
        this.actionsService.updateCivilActions(newCivilActions);
    }
}