var Westeros;

((Westeros) => {
  var Wall = (() => {
    function Wall() {
      this.height = 0
      if (Wall._instance) return Wall._instance
      Wall._instance = this  
    }

    Wall.prototype.getInstance = function() {
      if (!Wall._instance) Wall._instance = new Wall()
      return Wall._instance
    }
    Wall._instance = null
    return Wall
  })()

  Westeros.Wall = Wall

})(Westeros || (Westeros = {}))