import { NameUtils } from '../../common/utils/name-utils';
import { TacticsService } from '../../common/services/tactics.service';
import { Component, OnInit } from '@angular/core';
import { CardService } from '../../cards/card.service';

@Component({
  selector: 'tactics',
  templateUrl: './tactics.component.html',
  styleUrls: [
    './tactics.component.css'
  ]
})
export class TacticsComponent implements OnInit {

  constructor(private cardService: CardService, private tacticsService : TacticsService) { }

  ngOnInit() {
    
  }

  playTactic() {
    this.tacticsService.setTactic(this.cardService.get("fightingband"));
  }

  private getExclusiveTactic() {
    return this.tacticsService.getCurrentTactic();
  }

  get classname() {
    return NameUtils.getClassName(this.getExclusiveTactic().getName());
  }
}