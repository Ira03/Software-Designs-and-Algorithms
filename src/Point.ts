export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x:number, y:number)
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(point: Point):number;
  distance(x:number, y:number):number;
  distance(...args) {
    let x;
    let y;

    if (args.length === 0) {
      x = 0;
      y = 0
    } else if (args.length === 1) {
      const {x: pointX, y: pointY} = args[0];
      x = pointX;
      y = pointY;
    } else if (args.length === 2) {
      x = args[0];
      y = args[1];
    }
    return this.calculateDistance(x, y);
  }

  private calculateDistance(x: number, y: number):number {
    let diffX = x - this.x;
    let diffY = y - this.y;

    return  +Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)).toFixed(1);
  }
}
