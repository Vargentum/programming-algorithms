/*
  
  Facade Pattern

    kind of Adapter
    provide simple interface over classes collections
*/

() => {

  class Ship {
    constructor(args) {}
    turnLeft() {}
    turnRight() {}
    goForward() {}
  }

  class Admiral {
    constructor(args) {}
  }

  class SupplyCoordinator {
    constructor(args) {}
  }


  // Build a Facade

  class Fleet {
    constructor(args) {}
  
    setDestination() {
      //pass commands to a series of sheeps, admirals ...
    }

    resupply() {}

    attack() {}
  }

}