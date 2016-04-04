/*

Bridge: kind of Adapter


solidify multiple interfaces into single one


*/

() => {


  var OldGods = (function () {
     function OldGods() {
     }
     OldGods.prototype.prayTo = function (sacrifice) {
       console.log("We Old Gods hear your prayer");
     };
     return OldGods;
   })();
  Religion.OldGods = OldGods;

  var DrownedGod = (function () {
   function DrownedGod() {
   }
   DrownedGod.prototype.prayTo = function (humanSacrifice) {
     console.log("*BUBBLE* GURGLE");
   };
   return DrownedGod;
  })();
  Religion.DrownedGod = DrownedGod;

  var SevenGods = (function () {
   function SevenGods() {
   }
   SevenGods.prototype.prayTo = function (prayerPurpose) {
     console.log("Sorry there are a lot of us, it gets confusing here.  Did you pray for something?");
   };
   return SevenGods;
  })();
  Religion.SevenGods = SevenGods;


}

/*problem: prayTo different signatures
decision: Bridge*/

class OldGodsAdapter extends Component {
  constructor() {
    this._god = new OldGods()
  }
  prayTo() {
    const sacrifice = new Sacrifise()
    this._god.prayTo(sacrifice)
  }
}


class DrownedGodAdapter extends Component {
  constructor() {
    this._god = new DrownedGod
  }
  prayTo() {
    const humanSacrifice = new HumanSacrifice()
    this._god.prayTo(humanSacrifice)
  }
}

class SevenGodsAdapter extends Component {
  constructor() {
    this._god = new SevenGods
  }
  prayTo() {
    const purpose = new Purpose()
    this._god.prayTo(purpose)
  }
}

/*implemented single interface: 

interface God
   {
     prayTo():void;
   }
*/




