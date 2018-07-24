import { NameUtils } from './../../common/utils/name-utils';
import { StrengthService } from './../../common/services/strength.service';
import { ActionsService } from './../../common/services/actions.service';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
@Component({
    templateUrl: '../../common/templates/leader.template.html',
    styleUrls: [
        '../../common/styles/cards.css',
        './../leader.component.css'
    ]
})
export class JuliusCaesarComponent implements AfterViewInit, OnDestroy {
    card;
    constructor(private strengthService: StrengthService, private actionsService: ActionsService) {}
    
    ngAfterViewInit() {
        setTimeout(()=>{
            this.updateRatings(1);
        });
    }

    ngOnDestroy() {
        this.updateRatings(-1);
    }

    get classname() {
        return NameUtils.getClassName(this.card.name);
    }

    private updateRatings(multiplier) {
        this.updateStrength(multiplier);
        this.updateActions(multiplier);
    }

    private updateStrength(multiplier) {
        let currentStrength = this.strengthService.getNonTacticalStrength();
        let newStrength = currentStrength + (multiplier * this.card.getRating().strength);
        this.strengthService.setNonTacticalStrength(newStrength);
    }

    private updateActions(multiplier) {
        let currentMilitaryActions = this.actionsService.getMilitaryActions();
        let newMilitaryActions = currentMilitaryActions + (multiplier * this.card.getRating().militaryActions);
        this.actionsService.updateMilitaryActions(newMilitaryActions)
    }
}