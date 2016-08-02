/*
Write a function which takes one parameter representing the dimensions of a checkered board. 
The board will always be square, so 5 means you will need a 5x5 board.

The dark squares will be represented by a unicode white square, 
while the light squares will be represented by a unicode black square 
(the opposite colours ensure the board doesn't look reversed on code wars' dark background). 

It should return a string of the board with a space in between each square and taking into account new lines.

An even number should return a board that begins with a dark square. 
An odd number should return a board that begins with a light square.

The input is expected to be a whole number that's at least two,
and returns false otherwise (Nothing in Haskell).
*/

const interpose = (divider, pred) => (item, idx) => pred(idx) ? (item, divider) : item
const interposeAt = (divider, atIdx) => interpose(divider, (idx) => idx === atIdx)
const interposeExcept = (divider, exceptIdx) => interpose(divider, (idx) => idx !== exceptIdx)

export default function checkeredBoard (dim) {
  const squares = {
    filled: '■',
    empty: '□'
  }
  const lineBreak = '/n'
  const seq = _.times(dim * dim, () => [squares.filled, squares.empty])
  console.log(seq)
  return seq
    .map(interposeAt(lineBreak, dim))
    .map(interposeExcept(' ', dim))
}
