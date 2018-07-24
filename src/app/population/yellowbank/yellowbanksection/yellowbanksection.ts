import { PopulationBracket } from './populationbracket';
export class YellowBankSection {
    private populationBrackets:  PopulationBracket[] = [];
    private bracketIndex: number = 0;
    private emptyBracket: PopulationBracket = null;
    constructor(private foodCost: number, private bracketSizes, private happinessMarkers: number[], private foodConsumption: number) {
        let numBrackets = bracketSizes.length;
        for (let i = 0; i < numBrackets; i++) {
            this.populationBrackets.push(new PopulationBracket(bracketSizes[i], happinessMarkers[i]));
        }
    }

    getBrackets() {
        return this.populationBrackets;
    }

    add() {
        let bracket = this.populationBrackets[this.bracketIndex];
        if(bracket.isFull()) {
            this.bracketIndex++;
            bracket = this.populationBrackets[this.bracketIndex];
        }
        bracket.add();
        // The empty bracket is the bracket after the current one
        this.emptyBracket = this.populationBrackets[this.bracketIndex + 1];
    }

    remove() {
        let bracket = this.populationBrackets[this.bracketIndex];
        bracket.remove();

        if (bracket.isEmpty()) {
            this.emptyBracket = bracket;
            this.bracketIndex = Math.max(0, this.bracketIndex - 1);
            bracket = this.populationBrackets[this.bracketIndex];
        }
    }

    isFull() {
        return this.populationBrackets.every(function(bracket) {
            return bracket.isFull();
        }, this);
    }

    append() {
        let bracket = this.getLastBracket();
        bracket.append();
    }

    isEmpty() {
        return this.populationBrackets.every(function(bracket) {
            return bracket.isEmpty();
        });
    }

    clearHappiness() {
        this.populationBrackets.forEach(function(bracket) {
            bracket.clearHappiness();
        });
    }

    setHappiness(bracketIndex) {
        let bracket = this.populationBrackets[bracketIndex];
        bracket.setHappinessMarker();
    }

    getFoodCost() {
        return this.foodCost;
    }

    getConsumption() {
        return this.foodConsumption;
    }

    getNumberOfEmptyBrackets() {
        let reversedArray = this.populationBrackets.slice().reverse();
        return (reversedArray.indexOf(this.emptyBracket) + 1); // + 1 to offset the -1 returned by indexOf when there is no empty bracket
    }

    private getLastBracket() {
        return this.populationBrackets[this.populationBrackets.length - 1];
    }
}