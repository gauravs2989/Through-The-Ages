import { Token } from 'common/Token';
export class PopulationBracket {
    private tokens: Token[] = [];
    private index: number = 0;
    private isHappinessMarkerHere: boolean = false;

    constructor(private size: number, private happiness: number) {
        for (let i = 0; i < size; i++) {
            this.tokens.push(new Token());
        }
    }

    getTokens() {
        return this.tokens;
    }

    add() {
       this.tokens[this.index].setFilled(true);
       this.index++;
    }

    remove() {
        this.index--;
        this.tokens[this.index].setFilled(false);
        if(this.index >= this.size) {
            this.tokens.splice(this.index, 1);
        }
    }

    isFull() {
        return this.index >= this.size;
    }

    append() {
        let newToken = new Token();
        newToken.setFilled(true);
        this.tokens.push(newToken);
        this.index++;
    }

    isEmpty() {
        return this.index === 0;
    }

    clearHappiness() {
        this.isHappinessMarkerHere = false;
    }

    setHappinessMarker() {
        this.isHappinessMarkerHere = true;
    }

    getHappiness() {
        return this.happiness;
    }
}