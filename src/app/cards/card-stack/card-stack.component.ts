import { DiscoveredTechsService } from 'common/services/discovered-techs.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: [
    './card-stack.component.css'
  ]
})
export class CardStackComponent implements OnInit {
  @Input('stack') stack;
  @Output('unitBuilt') unitBuilt = new EventEmitter();
  @Output('unitDestroyed') unitDestroyed = new EventEmitter();

  constructor(private discoveredTechsService: DiscoveredTechsService) { 
  }

  ngOnInit() {
  }

  onUnitBuilt(card) {
    this.unitBuilt.emit(card);
  }

  onUnitDestroyed(card) {
    this.unitDestroyed.emit(card);
  }

}