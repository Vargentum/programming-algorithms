/*
1 x  -Push the element x into the stack.
2    -Delete the element present at the top of the stack.
3    -Print the maximum element in the stack.
*/

const descSort = (a,b) => b - a
const isTrue = x => !!x
const getLast = ary => ary[ary.length - 1]

const Stack = (() => {
  const data = []
      , maxNumbers = {}
  function getLastOf(ary) {
    return ary.length ? getLast(ary) : -Infinity 
  }
  function push(item) {
    if (item > getLastOf(data)) maxNumbers[item] = item
    data.push(item)
  }
  function pop() {
    if (!data.length) return
    var item = data.pop();
    delete maxNumbers[item]
  }
  function getMax() {
    return getLast(Object.keys(maxNumbers))
  }
  return {
    push, pop, getMax
  }
})()

const parseSeq = (stack) => (item) => {
  const [instruction, value] = item.split(' ')
  switch (instruction) {
    case '1': stack.push(Number(value)); break;
    case '2': stack.pop(); break;
    case '3': return stack.getMax();
  }
}

export function parseInput(str) {
  const [init, ...seq] = str.split(/\n/)
  return seq.map(parseSeq(Object.create(Stack))).filter(isTrue).join(' ')
}

