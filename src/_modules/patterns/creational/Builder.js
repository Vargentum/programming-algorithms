'use strict';

/*Problem:
  build complex object based on different approaches
  keep functionality centralized
  encapsulate knowlege of buildin from consumers*/


var Builder
(() => {


  var Westeros
  (() => {

    //definee some help classes
    var Event = (() => {
      function Event(name) {
        this.name = name
      }
      return Event
    })()
    Westeros.Event = Event

    var Prize = (() => {
      function Prize(name) {
        this.name = name
      }
      return Prize
    })()
    Westeros.Prize = Prize

    var Attendee = (() => {
      function Attendee(name) {
        this.name = name
      }
      return Attendee
    })()
    Westeros.Attendee = Attendee

    
    //definee tournament class
    var Tournament = (() => {
      this.events = []
      this.attendees = []
      this.prizes = []
      function Tournament() {}
      return Tournament
    })()
    Westeros.Tournament = Tournament


    //define various tournament builders
    
    var LannisterTournamentBuilder = (() => {
      function LannisterTournamentBuilder() {
        var tournament = new Tournament()
        tournament.events.push(new Event('Archer'))
        tournament.events.push(new Event('Melee'))

        tournament.attendees.push(new Attendee('Jamie'))

        tournament.prizes.push(new Prize('100 coins'))
        tournament.prizes.push(new Prize('1000 coins'))
        return tournament()
      }
      return LannisterTournamentBuilder
    })()
    Westeros.LannisterTournamentBuilder = LannisterTournamentBuilder


    var BaratheonTournamentBuilder = (() => {
      function BaratheonTournamentBuilder() {
        var tournament = new Tournament()
        tournament.events.push(new Event('Knight'))

        tournament.attendees.push(new Attendee('John'))

        tournament.prizes.push(new Prize('1 horse'))
        tournament.prizes.push(new Prize('3 horses'))
        return tournament
      }
      return BaratheonTournamentBuilder
    })()
    Westeros.BaratheonTournamentBuilder = BaratheonTournamentBuilder



    // Builder director: takes builder and executes it
    var TournamentBuilder = (() => {
      function TournamentBuilder() {}
      TournamentBuilder.prototype.build = function(builder) {
        return builder.build()
      }
      return TournamentBuilder
    })()
    Westeros.TournamentBuilder = TournamentBuilder


  })(Westeros || (Westeros = {}))
})(Builder || (Builder = {}))