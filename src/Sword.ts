import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  maxDamage: number;

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number ) {
    super("sword", baseDamage, baseDurability, value, weight);
    this.maxDamage = this.getMaxDamage(1.25) ;
  }

  polish() {
    if ((this.getFullDamage() + 1) <= this.maxDamage) {
      this.updateDamageModifier();
    }
  }
}