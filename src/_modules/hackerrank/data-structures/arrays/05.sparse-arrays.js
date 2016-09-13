/*
n1 .....
h2 .....
N

q1 ...
q2...
Q



Ex:
4
aba
baba
aba
xzxb
3
aba
xzxb
aba

There are  strings. 
Each string's length is no more than  characters. 
There are also  queries. 
For each query, you are given a string, 
and you need to find out how many times this string occurred previously.
*/
export function parseInput(input) {
  const [N, ...rest] = input.split(/\n/)
       , strings = rest.slice(0, Number(N))
       , queries = rest.slice(Number(N)+1)
  return [strings, queries]
}
export function parseOutput(output) {
  return output.join('\n')
}


const toFrequency = (item) => (p,n) => n === item ? p + 1 : p 
const getFrequency = (where, what) => where.reduce(toFrequency(what), 0)

export function findString(strings, queries) {
  const repeated = {}
  return queries.map(query => {
    if (repeated[query]) return repeated[query]
    const queryFrq = getFrequency(strings, query)
    repeated[query] = queryFrq
    return queryFrq
  })
}

