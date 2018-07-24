import { ResourceService } from './../../common/services/resource.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { HappinessService } from './../../common/services/happiness.service';
import { NameUtils } from './../../common/utils/name-utils';
import { Component, AfterViewInit } from "@angular/core";


@Component({
    templateUrl: '../../common/templates/leader.template.html',
    styleUrls: [
        '../../common/styles/cards.css',
        './../leader.component.css'
    ]
})
export class HomerComponent implements AfterViewInit, OnDestroy {   
    card;
    
    constructor(private happinessService: HappinessService, private resourceService: ResourceService) {

    }

    ngAfterViewInit() {
        setTimeout(()=> {
            this.updateRatings(1);
        })
    }

    ngOnDestroy() {
        this.updateRatings(-1);
    }

    get classname() {
        return NameUtils.getClassName(this.card.name);
    }

    private updateRatings(multiplier) {
        this.updateHappiness(multiplier);
        this.updateResources(multiplier);
    }

    private updateHappiness(multiplier) {
        let happiness = this.card.getRating().happiness;
        let currentHappiness = this.happinessService.getRating();
        this.happinessService.updateRating(currentHappiness + (multiplier * happiness));
    }

    private updateResources(multiplier) {
        let militaryResources = this.resourceService.getMilitarySpecificResources();
        this.resourceService.updateMilitarySpecificResources(militaryResources + (multiplier * this.card.getRating().militaryResources)); 
    }
}