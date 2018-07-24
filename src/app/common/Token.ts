export class Token {
    private filled;
    setFilled(filled: boolean) {
        this.filled = filled;
    }

    isFilled() {
        return this.filled;
    }
}