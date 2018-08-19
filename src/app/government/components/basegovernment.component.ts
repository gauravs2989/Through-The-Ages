import { NameUtils } from 'common/utils/name-utils';
import { Token } from 'common/Token';
import { ActionsService } from 'common/services/actions.service';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
@Component({
    templateUrl: './../../common/templates/government.template.html',
    styleUrls: [
        './../government.component.css',
        './../../common/styles/cards.css',
        './../../common/styles/tokens.css'
    ]
})
export class BaseGovernmentComponent implements AfterViewInit, OnDestroy {
    card;
    private civilActionTokens = [];
    private militaryActionTokens = [];
    private optionalCivilActions = [];

    constructor(private actionsService: ActionsService) {
        this.actionsService.civilActions$.subscribe(() => {
            this.addCivilActionTokens();
        });
          
          this.actionsService.militaryActions$.subscribe(() => {
            this.addMilitaryActionTokens();
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.addCivilActions();
            this.addMilitaryActions();
        });
    }

    ngOnDestroy() {
        this.removeCivilActions();
        this.removeMilitaryActions();
    }

    get classname() {
        return NameUtils.getClassName(this.card.name);
    }

    private hasOptionalCivilActions() {
        let optionalCivilActions = this.actionsService.getOptionalCivilActions();
        return optionalCivilActions > 0;
    }

    private addCivilActions() {
        let currentCivilActions = this.actionsService.getCivilActions();
        let newCivilActions = currentCivilActions + this.card.getCivilActions();
        this.actionsService.updateCivilActions(newCivilActions);
    }

    private addMilitaryActions() {
        let militaryActions = this.actionsService.getMilitaryActions();
        let newMilitaryActions = militaryActions + this.card.getMilitaryActions();
        this.actionsService.updateMilitaryActions(newMilitaryActions);
    }

    private addCivilActionTokens() {
        let civilActions = this.actionsService.getCivilActions();
        
        this.civilActionTokens = [];
        for (let i = 0; i < civilActions; i++) {
          this.civilActionTokens.push(new Token());
        }
    }

    private addMilitaryActionTokens() {
        let militaryActions = this.actionsService.getMilitaryActions();
        this.militaryActionTokens = [];
        for (let i = 0; i < militaryActions; i++) {
            this.militaryActionTokens.push(new Token());
        }
    }

    private removeCivilActions() {
        let civilActions = this.actionsService.getCivilActions();
        let newCivilActions = civilActions - this.card.getCivilActions();
        this.actionsService.updateCivilActions(newCivilActions);
    }

    private removeMilitaryActions() {
        let militaryActions = this.actionsService.getMilitaryActions();
        let newMilitaryActions = militaryActions - this.card.getMilitaryActions();
        this.actionsService.updateMilitaryActions(newMilitaryActions);
    }
}