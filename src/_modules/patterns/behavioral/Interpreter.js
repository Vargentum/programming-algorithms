/*
  Interpreter pattern

  Allows to create own language
  Parts: Parser, Lexor
  Tools: RegExps
*/

// Pattern example
// (argessor -> battle ground <- defender) -> victor

() => {

  class Battle {
    constructor(battleGround, agressor, defender, victor) {
      const battle = {battleGround, agressor, defender, victor}
      return battle
    }
  }

  class Parser {
    static pattern = /^\((.*?) -> (.*?) <- (.*?)\) -> (.*?)$/i
    constructor() {}

    parseBattle(text) {
      const [origText, agressor, battleGround, defender, victor] = text.match(Parser.pattern)
      return new Battle(battleGround, agressor, defender, victor)
    }
  }

  const p = new Parser()
  const parsedBattle = p.parseBattle("(Robert Baratheon -> River Trident <- RhaegarTargaryen) -> Robert Baratheon")

  parsedBattle // {"battleGround":"River Trident","agressor":"Robert Baratheon","defender":"RhaegarTargaryen","victor":"Robert Baratheon"}
  
}