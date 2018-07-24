export class NameUtils {
    static getClassName(cardName) {
        return cardName.toLowerCase().split(' ').join('');
    }
}