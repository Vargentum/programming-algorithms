/*
  Command pattern

  Encapsulate method, object state and params inside independent package 
  for delayed execution
*/

() => {

  class LordInstructions {
    constructor(args) {}
    bringTroops(location, numberOfTroops, when) {
      console.log(`${numberOfTroops} arrived to ${location} at ${when}`)
    }
  }
  class BringTroopsCommand {
    constructor(location, numberOfTroops, when) {
      this._location = location
      this._numberOfTroops = numberOfTroops
      this._when = when
    }
    Execute() {
      const receiver = new LordInstructions()
      receiver.bringTroops(this._location, this._numberOfTroops, this._when)
    }
  }
  const cmd = new BringTroopsCommand('right corner', 5, '12:00pm')

  setTimeout(() => {
    cmd.Execute()
  }, 1000)

}