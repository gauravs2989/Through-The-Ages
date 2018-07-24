import { TechnologyCard } from './TechnologyCard';

export class GovernmentCard extends TechnologyCard {
    
    constructor(name: string, level: number, scienceCost: any, private actions: any, private ratings: any) {
        super(name, level, null, scienceCost);
    }

    getCivilActions() {
        return this.actions.civil;
    }

    getMilitaryActions() {
        return this.actions.military;
    }

    getRatings() {
        return this.ratings;
    }
}