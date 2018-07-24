import { ResourceBracket } from './resourcebracket';
export class BlueBankSection {
    
    private brackets: ResourceBracket[] = [];
    private bracketIndex: number = 0;
    private activeBracket: ResourceBracket;
    private initialNumberOfBrackets: number;

    constructor(private initialCapacity: number, private corruption: number) {
        
        this.initialNumberOfBrackets = Math.ceil((initialCapacity - 1)/2) + 1;
        this.createBrackets(initialCapacity);
        this.activeBracket = this.brackets[this.bracketIndex];
    }

    getBrackets() {
        return this.brackets;
    }

    getCorruption() {
        return this.corruption;
    }

    add() {
        if (this.activeBracket.areAllTokenPlaceHoldersFull()) {
            this.bracketIndex++;
            this.activeBracket = this.brackets[this.bracketIndex];
        }
        this.activeBracket.add();
    }

    isFull() {
        return this.brackets.every(function(bracket) {
            return bracket.areAllTokenPlaceHoldersFull();
        });
    }

    append() {
        this.activeBracket = this.getLastBracket();

        if(this.activeBracket.isFull()) {
            this.brackets.push(new ResourceBracket(0, 2));
            this.activeBracket = this.getLastBracket();
        }

        this.bracketIndex = this.brackets.indexOf(this.activeBracket);
        this.activeBracket.append();
    }

    remove() {

        if(this.activeBracket.isEmpty()) {
            this.bracketIndex--;
            this.activeBracket = this.brackets[this.bracketIndex];
        }

        this.activeBracket.remove();

        if(this.bracketIndex >= this.initialNumberOfBrackets && this.activeBracket.isEmpty()) {
            this.brackets.splice(this.bracketIndex, 1);
        }
    }

    isEmpty() {
        return this.brackets.every(function(bracket) {
            return bracket.isEmpty();
        });
    }

    private createBrackets(initialCapacity) {
        this.brackets.push(new ResourceBracket(1, 1));
        let tokenPlaceHolders = 1;
        while(tokenPlaceHolders < initialCapacity) {
            let initialTokenPlaceHolders = Math.min(initialCapacity - tokenPlaceHolders, 2);
            let bracket = new ResourceBracket(initialTokenPlaceHolders,2);
            this.brackets.push(bracket);
            tokenPlaceHolders += initialTokenPlaceHolders;
        }
    }

    private getLastBracket() {
        return this.brackets[this.brackets.length - 1];
    }
}