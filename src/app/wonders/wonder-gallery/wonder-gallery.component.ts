import { NameUtils } from './../../common/utils/name-utils';
import { Component, OnInit, Input } from '@angular/core';
import { WondersService } from '../../common/services/wonders.service';

@Component({
  selector: 'wonder-gallery',
  templateUrl: './wonder-gallery.component.html',
  styleUrls: [
    './wonder-gallery.component.css',
    './../../common/styles/cards.css'
  ]
})
export class WonderGalleryComponent {

  @Input('displayIndex') displayedWonderIndex: number = 0;
  @Input('wonderToDisplay') wonderToDisplay;

  constructor(private wonderService: WondersService) { }

  private getCompletedWonders() {
     return this.wonderService.getCompletedWonders();
  }

  private get className() {
    return NameUtils.getClassName(this.wonderToDisplay.getName());
  }

  private getPreviousWonder() {
    let completedWonders = this.getCompletedWonders();
    this.displayedWonderIndex--;
    if (this.displayedWonderIndex < 0) {
      this.displayedWonderIndex = completedWonders.length - 1;
    }
    this.wonderToDisplay = completedWonders[this.displayedWonderIndex];
  }

  private getNextWonder() {
    let completedWonders = this.getCompletedWonders();
    this.displayedWonderIndex = (this.displayedWonderIndex + 1) % completedWonders.length;
    this.wonderToDisplay = completedWonders[this.displayedWonderIndex];
  }
}
