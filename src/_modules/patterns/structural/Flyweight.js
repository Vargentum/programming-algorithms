/*
  Flyweight Pattern

  Used for similar objects
  Exclude common functionality into Prototype

  similar to Prototype pattern

*/


//without flyweight: each Soldier prop consume a memory

function Soldier() {
  this.health = 10
  this.fightingAbility = 5
  this.hunger = 0
}


// add Flyweight (via Prototype pattern)

const SoldierPrototype = {
  health: 10,
  fightingAbility: 5,
  hunger: 0
}

const soldier1 = Object.create(SoldierPrototype)
    , soldier2 = Object.create(SoldierPrototype)

soldier1.health // 10
soldier2.health // 10
soldier1.health = 7
soldier1.health // 7 add directly to object
soldier2.health // 10
delete soldier1.health
soldier1.health // 10 //get from prototype
soldier2.health // 10

