/*
  Decorator

  Used to wrap and augment an excisting class
  Good Alternate to sub-classing
*/

() => {

  class BasicArmor {
    constructor(args) {
      // code
    }

    calculateDamageFromHit(hit) {
      return hit.Strength
    }

    getArmorIntegrity() {
      return 1
    }
  }

  class ChainMail {
    constructor(decoratedArmor) {
      this.decoratedArmor = decoratedArmor
    }

    calculateDamageFromHit(hit) {
      hit.Strength = hit.Strength * .8

      this.decoratedArmor.calculateDamageFromHit(hit)
    }

    getArmorIntegrity() {
      return .9 * this.decoratedArmor.getArmorIntegrity()
    }
  }

  //decorating
  const chainMail = new ChainMain(new BasicArmor)
}