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
  if (!isIndexed(data)) fail(`Proven data type isn't correct. Use array or string.`)
  else if (!_.isNumber(idx)) fail(`Supplied incorrect index. Should be number`)
  else if (idx < 0 || idx >= data.length) warn(`Requested index ${idx} is out of proven data`)
  return data[idx]
}

const second = (data) => nth(data, 1)


