import { NameUtils } from 'common/utils/name-utils';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ActionsService } from 'common/services/actions.service';
import { CardRowService } from 'common/services/cardrow.service';
import { LeaderCard } from 'cards/LeaderCard';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    templateUrl: '../../common/templates/leader.template.html',
    styleUrls: [
        '../../common/styles/cards.css',
        './../leader.component.css'
    ]
})
export class HammurabiComponent implements AfterViewInit, OnDestroy {
    card;

    private cardRowFilledSubscription: ISubscription

    constructor(private actionsService: ActionsService, private cardRowService: CardRowService) {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.cardRowFilledSubscription = this.cardRowService.rowFilled$.subscribe(() => {
                console.log("Listening to row filled");
                this.updateActionCosts(1);
            });
            this.updateActions();
            this.updateActionCosts(1);
        });
    }

    ngOnDestroy() {
        this.cardRowFilledSubscription.unsubscribe();
        this.actionsService.setOptionalCivilActions(0);
        this.updateActionCosts(-1);
    }

    get classname() {
        return NameUtils.getClassName(this.card.name);
    }

    private updateActions() {
        this.actionsService.setOptionalCivilActions(this.card.getRating().actions);
    }

    private updateActionCosts(direction) {
        let discount = this.card.getRating().actionCostDiscount;
        let cardsOnRow = this.cardRowService.getCardsOnRow();

        cardsOnRow.forEach((cardOnRow) => {
            // Taking a leader from the card row costs you one civil action less.
            let card = cardOnRow.getCard();
            if (card instanceof LeaderCard && card.getLevel() !== this.card.getLevel()) {
                let currentCost = cardOnRow.getActionsToDraft();
                cardOnRow.setActionCost(currentCost - direction * discount);
            }
        })
    }
}