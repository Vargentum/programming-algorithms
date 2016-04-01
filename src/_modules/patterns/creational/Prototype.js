const Westeros;

((Westeros) => {
  const Wall = (() => {
    function Lannister() {}

    Lannister.prototype.clone = function() {
      return Object.assign({}, this)
    }

    return Lannister
  })()

  Westeros.Lannister = Lannister


  const jamie = new Westeros.Lannister()
  jamie.swordSkills = 9
  jamie.charm = 6
  jamie.wealth = 10

  const tyrion = jamie.clone()
  tyrion.charm = 10
  //tyrion.swordSkills = 9 
  //tyrion.wealth = 10

})(Westeros || (Westeros = {}))