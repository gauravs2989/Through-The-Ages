export class CardStack {
    private cards = [];
    constructor(private startLevel: number, private endLevel: number, private type: string) {

    }

    addCard(card) {
        this.cards.push(card);
    }

    isEmpty() {
        return this.cards.length === 0;
    }

    getCards() {
        return this.cards;
    }

    addUnitToCard(card) {
        card.component.instance.build();
    }
}