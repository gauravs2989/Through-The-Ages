import { BaseCard } from './BaseCard';
export class TacticsCard extends BaseCard {
    constructor(name: string, level: number, private composition: any, private primaryStrength: number, private secondaryStrength? : number) {
        super(name, level);
    }

    getComposition() {
        return this.composition;
    }

    getPrimaryBonus() {
        return this.primaryStrength;
    }

    getSecondaryBonus() {
        return this.secondaryStrength;
    }
}