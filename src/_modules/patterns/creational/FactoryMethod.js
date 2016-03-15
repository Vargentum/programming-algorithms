'use strict';

/*
  FactoryMethod pattern

  Separate instiantiation from usage

*/


export default FactoryMethod() {

  function WaterGod() {}
  WaterGod.prototype.prayTo = function() {}

  function FireGod() {}
  FireGod.prototype.prayTo = function() {}

  function DefaultGod() {}
  DefaultGod.prototype.prayTo = function() {}

  function GodFactory (godName) {
    switch (godName) {
      case 'water': return new WaterGod()
      case 'fire': return new FireGod()
      default: return new DefaultGod()
    }
  }

  function Prayer () {

  }
  Prayer.prototype.pray = function(godName) {
    return GodFactory(godName).prayTo()
  }

}