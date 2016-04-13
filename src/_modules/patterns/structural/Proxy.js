/*
  Proxy pattern

  mirrors the interface of actual instance
  adds something to it


*/


() => {

  // calculator in 'pints' unit format

  class BarrelCalculator {
    calcNumberNeeded(volume) {
      return Math.ceil(volume / 357) 
    }
  }

  // make similar calculator, that works with 'dragon' unit format

  class DragonBarrelCalculator {
    calcNumberNeeded(volume) {
      if (this._barrelCalculator == null) {
        this._barrelCalculator = new BarrelCalculator()
      }
      this._barrelCalculator.calcNumberNeeded(volume * .77)
    }
  }

}