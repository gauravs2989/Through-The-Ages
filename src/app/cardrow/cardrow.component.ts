import { CardInRow } from './cardinrow/cardinrow';
import { CardRowService } from '../common/services/cardrow.service';
import { CardService } from '../cards/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cardrow',
  templateUrl: './cardrow.component.html',
  styleUrls: ['./cardrow.component.css']
})
export class CardRowComponent implements OnInit {
  
  constructor(private cardRowService: CardRowService) { }

  ngOnInit() {
  }

  private getCardsOnRow() {
    return this.cardRowService.getCardsOnRow();
  }

  private fillRow() {
    this.cardRowService.fillRow();
  }

  private handleCardDrafted(card: CardInRow) {
    console.log("Drafted card: " + card.getPositionOnRow());
    this.cardRowService.removeCardFromRow(card);
  }
}