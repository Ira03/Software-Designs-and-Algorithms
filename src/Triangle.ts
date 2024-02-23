import { Shape } from "./Shape";
import { Point } from "./point";

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3:Point, color?:string, filled?:boolean) {
    super([point1, point2, point3], color, filled);
  }
  toString() {
    return `Triangle[${this.printPoints()}]`;
  }

  printPoints() {
    return this.points.map((point, i) =>`v${i + 1}=${point.toString()}`).join(',')
  }

  private getTriangleSides() {
    return this.points.map((point, i) => point.distance(this.points[i + 1] ?? this.points[0]));
  }

  getType() {
    let type = ''
    const sides = this.getTriangleSides().sort((a, b) => a - b);
    const [a, b, c] = sides;

    if (a === c) {
      type = "equilateral triangle";
    } else if (a < b && b < c) {
      type = "scalene triangle"
    } else {
      type = "isosceles triangle"
    }
    return type;
  }

}