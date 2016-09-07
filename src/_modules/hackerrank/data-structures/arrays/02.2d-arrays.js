/*
Context 
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values.


Algo:

  1. limit field from each square you can create an H
  2. map throught it, making the H
  3. get Sum
*/

const HOURGLASS_SIZE = 3 //height & width are equal
const sum = (p,n) => p + Number(n)
const concat = (p,n) => p.concat(n)

export default function findHourglassesSum (incomeAry) {
  const hgsLastIdx = HOURGLASS_SIZE - 1
  const hgsCreationLimit = incomeAry.length - HOURGLASS_SIZE

  const findHgs = ({x, y}, ary2d) => {
    const result = []
    if (x >= hgsCreationLimit || y >= hgsCreationLimit) return result
    const top = ary2d[y].slice(x, x + hgsLastIdx)
         ,ctr = ary2d[y+1][x+1]
         ,btm = ary2d[y+hgsLastIdx].slice(x,x + hgsLastIdx)
    result.push(...top, ctr, ...btm)
    return result
  }

  return incomeAry
    .map((row,y) => {
      return row
        .map((cell, x) => findHgs({x,y}, incomeAry))
        .reduce(concat)
        .reduce(sum, 0)
    })
    .reduce(sum, 0)
}