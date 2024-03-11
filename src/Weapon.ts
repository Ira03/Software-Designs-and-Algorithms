import { Item } from "./Item";

export class Weapon extends Item {
  private baseDamage: number;
  private damageModifier: number = 0;
  protected baseDurability: number;
  private durabilityModifier: number = 0;
  protected effectiveDurability: number;
  protected isBroken: boolean = false;

  static MODIFIER_CHANGE_RATE: number = 0.05;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.effectiveDurability = this.getEffectiveDurability();
  }

  getMaxDamage(value: number):number {
    return this.baseDamage * value;
  }

  updateDamageModifier() {
    this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
  }

  updateDurabilityModifier() {
    this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE
  }

  getFullDamage() {
    return this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
  }

  getFullDurability() {
    return this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
  }

  getEffectiveDamage() {
    return this.baseDamage + this.damageModifier;
  }

  getEffectiveDurability(durabilityModifier?: number) {
    const modifier = Number.isFinite(durabilityModifier) ? durabilityModifier : this.durabilityModifier;
    return this.baseDurability + modifier;
  }

  toString(): string {
    return `${super.toString()}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.effectiveDurability * 100).toFixed(2)}%`;
  }

  use(): string {

    if (this.isBroken) {
      return `You can't use the ${this.name}, it is broken.`
    }

    let message = `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`

    this.effectiveDurability -= Weapon.MODIFIER_CHANGE_RATE;

    if (this.effectiveDurability <= 0) {
      this.isBroken = true;
      return `${message}\nThe ${this.name} breaks.`
    }

    return message;
  }
}