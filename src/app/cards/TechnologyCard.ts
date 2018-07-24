import { BaseCard } from './BaseCard';

export class TechnologyCard extends BaseCard{
    constructor(name: string, level: number, private type: string, private scienceCost: number) {
        super(name, level)
    }

    getType() {
        return this.type;
    }
}