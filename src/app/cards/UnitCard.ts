import { EventEmitter } from '@angular/core';
import { Token } from 'common/Token';
import { TechnologyCard } from './TechnologyCard';

export class UnitCard extends TechnologyCard {
    
    rating: any;
    private tokens: Token[];
    private blueCubes: Token[];
    upgrades = [];

    unitBuilt: EventEmitter<any>;
    unitDestroyed: EventEmitter<any>;

    constructor(name: string, level: number, rating: any, type: string, scienceCost: number, private resourceCost: number) {
        super(name, level, type, scienceCost);
        this.rating = rating;
        this.tokens = [];
        this.blueCubes = [];
    }

    build() {
        this.tokens.push(new Token());
        if (this.unitBuilt) {
            this.unitBuilt.emit(this);
        }
    }

    destroy() {
        this.tokens.pop();
        if (this.unitDestroyed) {
            this.unitDestroyed.emit(this);
        }
    }

    getRating() {
        return this.rating;
    }

    getResourceCost() {
        return this.resourceCost;
    }

    hasUpgrades() {
        return this.upgrades.length > 0;
    }

    getUpgrades() {
        return this.upgrades;
    }

    getYellowCubes() {
        return this.tokens;
    }

    getBlueCubes() {
        return this.blueCubes;
    }

    produce() {
        // for each yellow token, produce a blue token
        let numYellowCubes = this.getYellowCubes().length;
        this.addBlueCubesToCard(numYellowCubes);
    }

    removeBlueCubes(cubesToRemove) {
        this.blueCubes.splice(0, cubesToRemove);
    }

    addBlueCubesToCard(cubesToAdd) {
        for (let i = 0; i < cubesToAdd; i++) {
            this.blueCubes.push(new Token());
        }
    }
}