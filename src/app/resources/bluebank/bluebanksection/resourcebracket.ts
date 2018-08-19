import { Token } from "common/Token";

export class ResourceBracket {
    private tokens: Token[] = [];
    private index: number = 0;
    constructor(private tokenPlaceHolders: number, private capacity: number) {
        for(let i = 0; i < tokenPlaceHolders; i++) {
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

    areAllTokenPlaceHoldersFull() {
        return this.index >= this.tokenPlaceHolders;
    }

    append() {
        let newTokenPlaceHolder = new Token();
        newTokenPlaceHolder.setFilled(true);
        this.tokens.push(newTokenPlaceHolder);
        this.index++;
    }

    isFull() {
        return this.index >= this.capacity;
    }

    remove() {
        this.index--;
        this.tokens[this.index].setFilled(false);
        if(this.index >= this.tokenPlaceHolders) {
            this.tokens.splice(this.index, 1);
        }
    }

    isEmpty() {
        return this.index === 0;
    }
}