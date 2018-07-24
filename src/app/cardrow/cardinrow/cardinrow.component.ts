import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cardinrow',
  templateUrl: './cardinrow.component.html',
  styleUrls: ['./cardinrow.component.css']
})
export class CardInRowComponent implements OnInit {
  @Input('card') card;
  constructor() { }

  ngOnInit() {
  }

  private getCostToTakeCard() {
    let actions = this.card.getActionsToDraft();
    var cost = [];
    for (let i = 0; i < actions; i++) {
      cost.push({});
    }
    return cost;
  }

  private draftCard() {
    console.log("Drafting card: ", this.card.getCard().getName());
  }
}
