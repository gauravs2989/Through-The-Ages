export class CardInRow {

    actionCost: number;

    constructor(private card) {
        this.actionCost = 0;
    }

    getCard() {
        return this.card;
    }

    getActionsToDraft() {
        return this.actionCost;
    }

    setActionCost(actionCost) {
        this.actionCost = actionCost;
    }
}