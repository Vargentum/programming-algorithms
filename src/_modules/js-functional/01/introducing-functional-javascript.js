import _ from "lodash"

/*
  Functions as a unit of abstraction
*/

// notification levels

export const fail = (msg) => { throw new Error(msg) }
export const warn = (msg) => { console.log(`WARN: ${msg}`) }
export const note = (msg) => { console.log(`NOTE: ${msg}`) }

export const isIndexed = (data) => _.isArray(data) || _.isString(data)

// get exsisted item by index from indexed data structure
export const nth = (data, idx) => {
  if (!isIndexed(data)) fail(`Proven data type ${data} isn't correct. Use array or string.`)
  else if (!_.isNumber(idx)) fail(`Supplied incorrect index. Should be number`)
  else if (idx < 0 || idx >= data.length) warn(`Requested index ${idx} is out of proven data`)
  return data[idx]
}

const second = (data) => nth(data, 1)



/*
  Comparator

  2 args function. compare arguments  
*/
const unsortedAry = [100, 1, 0, 10, -1, -2, -1]
const sortedAry = [-2, -1, -1, 0, 1, 10, 100]

const simpleComparator = (a,b) => {
  if (a < b) return -1
  if (b < a) return 1
  return 0
}

unsortedAry.sort(simpleComparator) // sortedAry

/*
  Predicate

  Function. Returns Bool
*/
// Combine Comparator with Predicate

export const comparator = (predicate) => (a,b) => {
  if (predicate(a,b)) return -1
  if (predicate(b,a)) return 1
  return 0
}

unsortedAry.sort(comparator(_.lte))
// console.log(unsortedAry.sort(comparator(_.isEqual)))


/*
  Combine functions to acheive result
*/
const peopleTable = [["name", "age", "hair"], ["Merble", "35", "red"], ["Bob", "64", "blonde"]]

const selectNames  = (table) => _.tail(_.map(table, _.head))
const selectAges   = (table) => _.tail(_.map(table, _.partial(nth, _, 1)))
const selectColors = (table) => _.tail(_.map(table, _.partial(nth, _, 2)))

selectNames(peopleTable)  // LOG: ['Merble', 'Bob']
selectAges(peopleTable)   // LOG: ['35', '64']
selectColors(peopleTable) // LOG: ['red', 'blonde']

