import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[] = [];


  addItem(item: Item) {
    this.items.push(item);
  }

  sort(comparator?: ItemComparator) {
    if (comparator) {
      this.items.sort((a, b) => comparator.compare(a, b));
    } else {
      this.items.sort((a, b) => a.compareTo(b));
    }
  }

  toString() {
    return this.items.join(', ')
  }
}