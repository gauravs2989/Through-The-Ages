import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { WondersService } from 'common/services/wonders.service';
import { LeaderService } from 'common/services/leader.service';
import { WonderCard } from 'cards/WonderCard';
import { LeaderCard } from 'cards/LeaderCard';

@Component({
  selector: 'cardinrow',
  templateUrl: './cardinrow.component.html',
  styleUrls: ['./cardinrow.component.css']
})
export class CardInRowComponent implements OnInit {
  @Input('card') card;
  @Output('cardDrafted') cardDrafted = new EventEmitter();

  constructor(private wondersService: WondersService, private leaderService: LeaderService) { }

  ngOnInit() {
  }

  private getCostToTakeCard() {
    let actions = this.card.getActionsToDraft();
    // The cost of taking a wonder is the cost on the card row 
    // plus the number of completed wonders.
    if (this.isWonder()) {
      actions += this.wondersService.getCompletedWonders().length;
    }
    var cost = [];
    for (let i = 0; i < actions; i++) {
      cost.push({});
    }
    return cost;
  }

  private draftCard() {
    this.cardDrafted.emit(this.card);
  }

  private isDrafted() : boolean {
    return this.card.isDrafted();
  }

  private canDraft() : boolean {
    // If this is already drafted, then cannot draft.
    if (this.isDrafted()) {
      return false;
    }

    // If this is a wonder card and there is a wonder under construction, cannot draft.
    if (this.isWonderUnderConstruction()) {
      return false;
    }

    // If this is a leader card and you have a leader from the same age, cannot draft.
    if (this.isElectedLeaderFromSameAge()) {
      return false;
    }

    // Otherwise can draft
    return true;
  }

  private isWonderUnderConstruction() : boolean {
    return this.isWonder() && this.wondersService.getWonderUnderConstruction() !== null;
  }

  private isElectedLeaderFromSameAge() : boolean {
    return this.isLeader() && 
          this.leaderService.getCurrentLeader() !== null && 
          this.card.getCard().getLevel() === this.leaderService.getCurrentLeader().getLevel()
  }

  private isWonder() : boolean {
    return this.card.getCard() instanceof WonderCard;
  }

  private isLeader() : boolean {
    return this.card.getCard() instanceof LeaderCard;
  }
}
