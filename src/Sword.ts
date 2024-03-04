import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  name = 'sword';
  maxDamage: number;

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number ) {
    super("sword", baseDamage, baseDurability, value, weight);
    this.maxDamage = this.baseDamage * 1.25 ;
  }

  polish() {
    if ((this.damageModifier + Weapon.MODIFIER_CHANGE_RATE + 1) <= this.maxDamage) {
      this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    }
  }
}