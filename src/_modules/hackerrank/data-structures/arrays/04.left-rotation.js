/*
A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if left rotations are performed on array , then the array would become .

Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

Input Format

The first line contains two space-separated integers denoting the respective values of  (the number of integers) and  (the number of left rotations you must perform).
The second line contains  space-separated integers describing the respective elements of the array's initial state.
*/

export function parseInput(input) {
  const [lenAndRotateQ, aryString] = input.split(/\n/)
  const [len, rotateQ] = lenAndRotateQ.split(' ').map(Number)
  const ary = aryString.split(' ').map(Number)
  return [len, rotateQ, ary]
}

export function parseOutput(output) {
  return output.join(' ')
}

const getItemToReplaceIdx = {
  right: (idx, total, rotateQ) => {
    const unsafeIdx = idx - rotateQ
    return unsafeIdx < 0
      ? total + unsafeIdx  // negative number 
      : unsafeIdx
  },
  left: (idx, total, rotateQ) => {
    const unsafeIdx = idx + rotateQ
    return unsafeIdx >= total
      ? unsafeIdx - total
      : unsafeIdx
  }
}

const makeRotation = (dir) => (len, rotateQ, ary) => {
  let realRotationsQ = rotateQ < len ? rotateQ : rotateQ % len

  if (!realRotationsQ) return ary

  return ary.map((x,i,a) => {
    const newIdx = getItemToReplaceIdx[dir](i, len, realRotationsQ)
    return a[newIdx]
  })
}

export const makeRotationLeft = makeRotation('left')
export const makeRotationRight = makeRotation('right')
