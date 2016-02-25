'use strict';

export default function connectFour (board) {
  const fields = {
    player1: 'R',
    player2: 'Y',
    empty: '-'
  }
  const statuses = {
    player1Win: fields.player1,
    player2Win: fields.player2,
    draw: 'draw',
    progress: 'in progress'
  }
  const deck = {
    x: 6,
    y: 5,
    win: 4
  }

  const boardAsString = board
    .reduce((p, n) => p.concat(n), [])
    .join('')

  const winChecks = {
    x:    type => board.map(line => line.join(''))
                       .filter(str => new RegExp(`${type}{${deck.win}}`, 'g').test(str))
                       .length,
    yr:   type => new RegExp(`(${type}.{${deck.x}}){${deck.win}}`, 'g').test(boardAsString),
    yl:   type => new RegExp(`(.{${deck.x}}${type}){${deck.win}}`, 'g').test(boardAsString),
    xylt: type => new RegExp(`(${type}.{${deck.x+1}}){${deck.win}}`, 'g').test(boardAsString),
    xyrt: type => new RegExp(`(${type}.{${deck.x-1}}){${deck.win}}`, 'g').test(boardAsString),
    xylb: type => new RegExp(`(.{${deck.x+1}}${type}){${deck.win}}`, 'g').test(boardAsString),
    xyrb: type => new RegExp(`(.{${deck.x-1}}${type}){${deck.win}}`, 'g').test(boardAsString)
  }
  const checkPlayerWin = (mark) => {
    for (let tp in winChecks) {
      if (winChecks[tp](mark)) return true
    }
    return false
  }
  const checkEmptyFields = () => new RegExp(`${fields.empty}`, 'g').test(boardAsString)

  switch (true) {
    case checkPlayerWin(fields.player1):
      return statuses.player1Win
    case checkPlayerWin(fields.player2):
      return statuses.player2Win
    case checkEmptyFields():
      return statuses.progress
    case !checkEmptyFields():
      return status = statuses.draw
  }
}
