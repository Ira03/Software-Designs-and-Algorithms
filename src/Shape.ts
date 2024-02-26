import { Point } from "./point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color?: string, filled?: boolean);
  constructor(points: Point[], color = 'green', filled = true) {
    this.validateShape(points);
    this.points = points;
    this.color= color;
    this.filled = filled;
  }

  private validateShape(points: Point[]) {
    if (points.length < 3) {
      throw new Error('No Shape')
    }
  }

  toString() {
    return `A Shape with color of ${this.color} and ${this.printFilled()}. Points: ${this.printPoints()}.`
  }

  protected printPoints() {
    return this.points.join(', ');
  }

  protected printFilled() {
    return this.filled ? "filled" : "not filled";
  }

  getPerimeter() {
    return this.points.reduce((sum, point, index, arr ) => {
       sum += point.distance(arr[index + 1] ?? arr[0]);
      return sum;
    }, 0)
  }

  abstract getType(): string;
}
