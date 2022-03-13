export class Util {
    static getTime(iso: boolean) {
        return new Date()[iso ? "toISOString" : "toString"]();
    }

    static createCatchReason<T extends string>(reason: T, err: Error): `${T}[${string}]` {
        return `${reason}[${err.message}]`;
    }
}