'use strict';

export default function connectFour (board) {
  const marks = {
    player1: 'R',
    player2: 'Y',
    empty: '-'
  }
  const statuses = {
    player1Win: marks.player1,
    player2Win: marks.player2,
    draw: 'draw',
    progress: 'in progress'
  }
  const deck = {
    x: 6,
    y: 5,
    win: 4
  }

  const boardString = board
    .reduce((p, n) => p.concat(n), [])
    .join('')


  const endings = {
    win: {
      x:    type => new RegExp(`${type}{${deck.win}}`, 'gi').test(boardString),
      yr:   type => new RegExp(`(${type}.{${deck.x}}){${deck.win}}`, 'gi').test(boardString),
      yl:   type => new RegExp(`(.{${deck.x}}${type}){${deck.win}}`, 'gi').test(boardString),
      xylt: type => new RegExp(`(${type}.{${deck.x+1}}){${deck.win}}`, 'gi').test(boardString),
      xyrt: type => new RegExp(`(${type}.{${deck.x-1}}){${deck.win}}`, 'gi').test(boardString),
      xylb: type => new RegExp(`(.{${deck.x+1}}${type}){${deck.win}}`, 'gi').test(boardString),
      xyrb: type => new RegExp(`(.{${deck.x-1}}${type}){${deck.win}}`, 'gi').test(boardString)
    },
    progress: () => new RegExp(`${marks.empty}`, 'g').test(boardString)
  }

  const winCheck = (mark) => {
    for (let check in endings.win) {
      if (endings.win[check](mark)) return true
    }
    return false
  }

  let status = null

  switch (true) {
    case winCheck(marks.player1):
      status = statuses.player1Win
      break;
    case winCheck(marks.player2):
      status = statuses.player2Win
      break;
    case endings.progress():
      status = statuses.progress
      break;
    default:
      status = statuses.draw
      break;
  }

  return status
}
