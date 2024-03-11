import { Consumable } from "./Consumable";
import { Item } from "./Item";

export class Pizza extends Consumable {
  readonly  numberOfSlices: number;
  protected numberOfEatenSlices: number = 0;
  _isSpoiled: boolean;


  constructor(value: number, weight: number, isSpoiled: boolean, numberOfSlices: number) {
    super('pizza', value, weight);
    this._isSpoiled = isSpoiled;
    this.numberOfSlices = numberOfSlices;
  }

  getNumberOfEatenSlices() {
    return this.numberOfEatenSlices;
  }

  use() {
    if (this.numberOfEatenSlices >= this.numberOfSlices) {
      this.isConsumed = true;
      return super.use();
    } else {
      this.numberOfEatenSlices++;
      return "You consumed a slice of the pizza."
    }
  }
}