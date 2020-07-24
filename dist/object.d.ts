interface IUser {
    name: string;
    age: number;
}
declare let customer: IUser;
declare class Shape {
    x: number;
    y: number;
    constructor(x: number, y: number);
    toString(): string;
}
interface IArea {
    area(): number;
}
declare class Rect extends Shape implements IArea {
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    area(): number;
}
declare const rect: Rect;
