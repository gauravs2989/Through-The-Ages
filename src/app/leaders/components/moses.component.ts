import { NameUtils } from './../../common/utils/name-utils';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { YellowCubeService } from '../../common/services/yellow-cube.service';

@Component({
    templateUrl: '../../common/templates/leader.template.html',
    styleUrls: [
        '../../common/styles/cards.css',
        './../leader.component.css'
    ]
})
export class MosesComponent implements AfterViewInit, OnDestroy {

  card;
  constructor(private yellowCubeService: YellowCubeService) { }

  ngAfterViewInit() {
      setTimeout(() => {
        this.setDiscount(this.card.getRating().discount);      
      });
  }

  ngOnDestroy() {
      this.setDiscount(0);
  }

  private get classname() {
      return NameUtils.getClassName(this.card.name);
  }

  /**
   * Provide/retract Moses's special food discount for increasing population
   * 
   * @param discount the special food discount
   */
  private setDiscount(discount) {
      this.yellowCubeService.setDiscount(discount);
  }
}