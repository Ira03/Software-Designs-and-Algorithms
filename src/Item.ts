import { Comparable } from './Comparable';

export abstract class Item implements Comparable<Item>{
 readonly id: number;
 readonly name: string;
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
    this.id = Item.idCounter++
  }

  getId() {
    return this.id;
  }

  compareTo(other: Item) {
    if (this.value > other.value ) {
      return 1;
    } else if (this.value < other.value) {
      return -1;
    } else if (this.value === other.value) {
        return this.name.localeCompare(other.name, "en", { sensitivity: "base" });
    }
    return 0;
  }

  toString() {
    return `${this.name} - Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`
  }

}