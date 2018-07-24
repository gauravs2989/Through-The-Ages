export class BaseCard {
    constructor(private name: string, private level: number) {

    }

    getName() {
        return this.name;
    }

    getLevel() {
        return this.level;
    }
}