/*

Adapter: allows adapt Square peg to the Round hole :)


Example:

We have this:

interface Ship{
     SetRudderAngleTo(angle: number);
     SetSailConfiguration(configuration: SailConfiguration);
     SetSailAngle(sailId: number, sailAngle: number);
     GetCurrentBearing(): number;
     GetCurrentSpeedEstimate(): number;
     ShiftCrewWeightTo(weightToShift: number, locationId: number);
}


But we want to use much simpler interface:

 interface SimpleShip{
  TurnLeft();
  TurnRight();
  GoForward();
}

*/

() => {

  // import Ship from "Ship"

  class SimpleShip extends Component {

    constructor() {
      this._ship = new Ship()
    }

    TurnLeft() {
      this._ship.SetRudderAngleTo(-30);
      this._ship.SetSailAngle(3, 12);
    }

    TurnRight() {
      this._ship.SetRudderAngleTo(30);
      this._ship.SetSailAngle(5, -9);
    }

    GoForward() {
      //make something else with _ship
    }
  }


    
}