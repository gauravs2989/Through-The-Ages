import { CardInRow } from '../../cardrow/cardinrow/cardinrow';
import { Injectable } from '@angular/core';
import { CardService } from '../../cards/card.service';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class CardRowService {
  private rowFilledSubject = new Subject<any>();
  public rowFilled$;

  cardsOnRow = [];

  constructor(private cardService: CardService) {
    this.rowFilled$ = this.rowFilledSubject.asObservable();
    this.fillRow();
  }

  public fillRow() {
    this.cardsOnRow = [];
    let cards = this.getCardsToFillRow();
    cards.forEach((card, index) => {
      let cardInRow = new CardInRow(this.cardService.get(card), index);
      let actionCost = this.getActionCostForCard(card, index);
      
      cardInRow.setActionCost(actionCost);
      this.cardsOnRow.push(cardInRow);
    });

    this.rowFilledSubject.next();
  }

  public getCardsOnRow() {
    return this.cardsOnRow;
  }

  public removeCardFromRow(card: CardInRow) {
    card.setDrafted(true);
  }

  private getActionCostForCard(card, index) {
    let positionCost = 0;
    if (index < 5) positionCost = 1;
    if (index >= 5 && index < 9) positionCost = 2;
    if (index >= 9 && index < 13) positionCost = 3;  

    return positionCost;
  }

  // should return some mocked out version
  private getCardsToFillRow() {
    return [
      "richlanda",
      "moses",
      "homer",
      "engineeringgeniusa",
      "pyramids",
      "aristotle",
      "frugalitya",
      "libraryofalexandria",
      "urbangrowtha",
      "colossus",
      "stockpilea",
      "richlanda",
      "julius"
    ];
  }
}
