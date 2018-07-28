export class CardInRow {

    actionCost: number;
    drafted: boolean;
    
    constructor(private card, private positionOnRow) {
        this.actionCost = 0;
        this.drafted = false;
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

    setDrafted(drafted: boolean) {
        this.drafted = drafted;
    }

    isDrafted() {
        return this.drafted;
    }

    getPositionOnRow() {
        return this.positionOnRow;
    }
}