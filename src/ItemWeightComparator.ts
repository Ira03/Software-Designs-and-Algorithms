import { Item } from './Item';
import { ItemComparator } from './ItemComparator';
export class ItemWeightComparator implements ItemComparator {

  compare(item1: Item, item2: Item) {
    if (item1.weight > item2.weight) {
      return 1;
    } else if (item1.weight < item2.weight) {
      return -1;
    } else {
      item1.compareTo(item2)
    }
  }
}