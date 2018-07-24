import { BaseCard } from './BaseCard';

export class WonderCard extends BaseCard {
    private stagesBuilt: number;
    constructor(name: string, level: number, private stageCosts: number[], private ratings: any) {
        super(name, level);
        this.stagesBuilt = 0;
    }

    getStages() {
        return this.stageCosts;
    }

    getNextStagesToBuild(stagesAllowedToBuild) {
        let nextStages;
        let endIndex = this.stagesBuilt + stagesAllowedToBuild;
        if (endIndex <= this.stageCosts.length) {
            nextStages = this.stageCosts.slice(this.stagesBuilt, endIndex);
        }
        return nextStages;
    }

    getBuiltStages() {
        return this.stagesBuilt;
    }

    buildStage(builtStages) {
        this.stagesBuilt += builtStages;
    }

    getRatings() {
        return this.ratings;
    }
}