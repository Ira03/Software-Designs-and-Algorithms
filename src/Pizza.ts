import { Item } from "./Item";

export class Pizza extends Item {
  readonly  numberOfSlices: number;
  protected numberOfEatenSlices: number = 0;
  protected isSpoiled: boolean;


  constructor(value: number, weight: number, isSpoiled: boolean, numberOfSlices: number) {
    super('pizza', value, weight);
    this.isSpoiled = isSpoiled;
    this.numberOfSlices = numberOfSlices;
  }

  getNumberOfEatenSlices() {
    return this.numberOfEatenSlices;
  }

  use() {
    let message;
    if (this.numberOfEatenSlices >= this.numberOfSlices) {
      message = "There's nothing left of the pizza to consume."
    } else {
      this.numberOfEatenSlices++;
      message = "You consumed a slice of the pizza."
    }

    return message;
  }
}