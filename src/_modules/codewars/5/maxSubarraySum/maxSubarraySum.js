/*
Algo

fill map of negative numbers {index: value}
if empty initialArray => corner case => return 0
if map is empty => corner case => return sum of array numbers
if map.keys.length equal initialArray.length => corner case => return 0

break to subsequences started at each negative index, limited closes negatives
count and compare them
*/
const isNegative = (x) => x < 0
const isPositive = (x) => x > 0
const isZero = (x) => x === 0
const isNegativeOrZero = (x) => isNegative(x) || isZero(x)

const sum  = (p,n) => p + n
const findLargest = (p,n) => p >= n ? p : n

const blowToSlidesWhile = (ary, prevIdx, nextIdx, pred) => {
  const stopByPrev = !pred(ary[prevIdx - 1])
  const stopByNext = !pred(ary[nextIdx + 1])
  if (stopByPrev && stopByNext) {
    return ary.slice(prevIdx, nextIdx+1)
  } else if (stopByPrev) {
    return blowToSlidesWhile(ary, prevIdx, nextIdx + 1, pred)
  } else if (stopByNext) {
    return blowToSlidesWhile(ary, prevIdx - 1, nextIdx, pred)
  } else {
    return blowToSlidesWhile(ary, prevIdx - 1, nextIdx + 1, pred)
  }
}

export default function maxSubarraySum(ary) {
  if (!ary.length || ary.every(isNegativeOrZero)) return 0
  else if (ary.every(isPositive)) return ary.reduce(sum)

  const negativeIndexes = ary.reduce((p, val, idx) => {
    if (isNegative(val)) return [...p, idx]
    else return p
  }, {})
  
  const limitedByNegNeibors = negativeIndexes.reduce((sequences, idx) => {
    return [...sequences, blowToSlidesWhile(ary, idx, idx, isPositive)]
  }, [])

  const sequencesSum = limitedByNegNeibors.map(seq => seq.reduce(sum, 0))
  return sequencesSum.reduce(findLargest)
}
