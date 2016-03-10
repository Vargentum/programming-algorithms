'use strict';


/*Problem: Tight coupling*/

let Westeros;

((Westeros) => {
  ((Castle) => {
    let Ruler = (() => {
      function Ruler () {
        this.house = new Westeros.Houses.Targaryen() // problem!
      }
      return Ruler      
    })()
    Westeros.Castle.Ruler = Ruler // revealing module 
  })(Westeros.Castle || (Westeros.Castle = {}))
})(Westeros || (Westeros = {}))



/*Desicion:

AbstractFactory -> ConcreteFactories
AbstractProduct -> ConcreteProducts
*/
let AbstractFactory
export default (function (AbstractFactory) {

  const KingJoffry = (() => {
    function KingJoffry () {}
    KingJoffry.prototype.makeJudgment = function() {return 'KingJoffry judges...'}
    return KingJoffry
  })()
  const LordTywin = (() => {
    function LordTywin () {}
    LordTywin.prototype.makeJudgment = function() {return 'LordTywin judges...'}
    return LordTywin
  })()
  const KingAerys = (() => {
    function KingAerys () {}
    KingAerys.prototype.makeJudgment = function() {return 'KingAerys judges...'}
    return KingAerys
  })()
  const LordConnington = (() => {
    function LordConnington () {}
    LordConnington.prototype.makeJudgment = function() {return 'LordConnington judges...'}
    return LordConnington
  })()

  /*Concrete factories*/
  const LannisterFamily = (() => {
    function LannisterFamily() {}
    LannisterFamily.prototype.getKing = () => new KingJoffry()
    LannisterFamily.prototype.getHandOfKing = () => new LordTywin()
    return LannisterFamily
  })() 

  const TargaryenFamily = (() => {
    function TargaryenFamily () {}
    TargaryenFamily.prototype.getKing = () => new KingAerys()
    TargaryenFamily.prototype.getHandOfKing = () => new LordConnington()
    return TargaryenFamily
  })()

  //abstract factory
  const CourtSession = (() => {
    function CourtSession(abstractFactory) {
      this.abstractFactory = abstractFactory
      this.COMPLAINT_TRESHOLD = 10
    }
    CourtSession.prototype.complaintPresented = function (complaint) {
      if (complaint.severity < this.COMPLAINT_TRESHOLD) {
        return this.abstractFactory.getHandOfKing().makeJudgment()
      } 
      else {
        return this.abstractFactory.getKing().makeJudgment()
      }
    }
    return CourtSession
  })()

  AbstractFactory.courtSession1 = new CourtSession(new LannisterFamily())
  AbstractFactory.courtSession2 = new CourtSession(new TargaryenFamily())

  return AbstractFactory
})(AbstractFactory || (AbstractFactory = {}))
