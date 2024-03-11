import { Pizza } from './Pizza';
import { Item } from "./Item";

export abstract class Consumable extends Item {
  isConsumed = false;
  _isSpoiled?: boolean;

  constructor(name: string, value: number, weight: number, isSpoiled: boolean = false) {
    super(name, value, weight);
    this._isSpoiled = isSpoiled;
  }

  use() {
    let message;

    if (this.isConsumed) {
      message = `There's nothing left of the ${this.name} to consume.`
    } else if (this._isSpoiled) {
      message = `You consumed the ${this.name}.\nYou feel sick.`
    } else {
      this.isConsumed = true;
      message = `You consumed the ${this.name}.`
    }

    return message;
  }

  isSpoiled() {
    return this._isSpoiled;
  }
}