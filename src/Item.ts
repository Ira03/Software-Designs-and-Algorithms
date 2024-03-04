import { Comparable } from './Comparable';

export abstract class Item implements Comparable<Item>{
  private id: number;
  name: string;
  weight: number;
  value: number;

  static idCounter: number = 1;
  static resetIdCounter() {
    Item.idCounter = 1;
  }


  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    this.assignId();

  }

  getId() {
    return this.id;
  }

  protected assignId() {
    this.id = Item.idCounter++;
  }

  compareTo(other: Item) {
    if (this.value > other.value ) {
      return 1;
    } else if (this.value < other.value) {
      return -1;
    } else if (this.name.toLowerCase() > other.name.toLowerCase() ) {
      return 1;
    } else if (this.name.toLowerCase() < other.name.toLowerCase() ) {
      return -1;
    }
    return 0;
  }

  toString() {
    return `${this.name} - Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`
  }

}