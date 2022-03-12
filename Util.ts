export class Util {
    static getTime(iso: boolean) {
        new Date().to
        return new Date()[iso ? "toISOString" : "toString"]();
    }
}