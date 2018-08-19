import { NameUtils } from 'common/utils/name-utils';
import { ScienceService } from 'common/services/science.service';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
@Component({
    templateUrl: '../../common/templates/leader.template.html',
    styleUrls: [
        '../../common/styles/cards.css',
        './../leader.component.css'
    ]
})
export class AristotleComponent implements AfterViewInit, OnDestroy {
    card;
    constructor(private scienceService: ScienceService) {
        
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.attachListeners();
        });
    }

    ngOnDestroy() {

    }

    private get classname() {
        return NameUtils.getClassName(this.card.name);
    }

    private attachListeners() {
        
    }

}