import {existy} from '../01/introducing-functional-javascript'

const cat = () => {
  const head = _.first(arguments)
  return existy(head) 
    ? Array.prototype.concat.apply(head, _.tail(arguments))
    : []
}
const construct = (head, tail) => cat([head], _.toArray(tail))
// const protect = (table, keys) => 
//   _.map(table, (obj) => 
//     _.pick.apply(null, construct(obj, keys))
//   )



export const protect = (table, ...keys) => _.map(table, (row) => _.pick(row, keys))


