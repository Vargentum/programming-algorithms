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
const sortAsc = (a,b) => a - b
const getLast = (ary) => ary[ary.length - 1]

export default function findHourglassesSum (incomeAry) {
  const findedHgs = []
  const hgsCreationLimit = incomeAry.length - HOURGLASS_SIZE  //limit positions that can't create hgs from
  const findHgsSum = ({x, y}, ary2d) => {
    if (x > hgsCreationLimit || y > hgsCreationLimit) return
    const top = ary2d[y].slice(x, x + HOURGLASS_SIZE)
         ,ctr = ary2d[y+1][x+1]
         ,btm = ary2d[y+2].slice(x,x + HOURGLASS_SIZE)
    findedHgs.push(
      [...top, ctr, ...btm].reduce(sum, 0)
    )
  }
  incomeAry
    .forEach((row,y) => {
      row.forEach((cell, x) => findHgsSum({x,y}, incomeAry))
    })
  return getLast(findedHgs.sort(sortAsc))
}