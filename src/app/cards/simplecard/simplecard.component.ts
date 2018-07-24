import { Component, OnInit, Input } from '@angular/core';
import { NameUtils } from '../../common/utils/name-utils';
import { YellowCard } from './../YellowCard';

@Component({
  selector: 'card',
  templateUrl: './simplecard.component.html',
  styleUrls: [
    './simplecard.component.css',
    './../../common/styles/cards.css',
  ]
})
export class SimplecardComponent implements OnInit {

  @Input('card') card;

  constructor() { }

  ngOnInit() {
  }

  public get classname() {
    if (this.card instanceof YellowCard) {
      return NameUtils.getClassName(this.card.getName()+this.card.getLevel());
    }
    return NameUtils.getClassName(this.card.getName());
  }

  private get name() {
    return this.card.getName();
  }
}
