import { BaseCard } from './BaseCard';

export class LeaderCard extends BaseCard {
    constructor(name: string, level: number, private rating: any) {
        super(name, level);
    }

    getRating() {
        return this.rating;
    }
}