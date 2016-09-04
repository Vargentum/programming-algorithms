import 'whatwg-fetch'
import co from "co"

/*
  Generator creation 
*/

export function* simpleGen() {
  yield 1
  yield 2
  return 3
}

/*
  generator.next() 

  return {value: `result of yield`, done: bool `converts to true if no yields`}

  if `done is true`, then value contains the result of `return`
*/


/*
  can be iterable :

    for..of loop available
    [...spread] available
*/


/*
  Generator composition
*/
export function* generateSeq(start, end) {
  for (let i = start; i <= end; i++) yield i
}

export function* generateAlhpaNum() {
  yield* generateSeq(48, 57) // 0..9
  yield* generateSeq(65, 90) // A..Z
  yield* generateSeq(97, 122) // a..z
}


/*
  Yield can be translate in both sides: inner and outer
  1 - next() without argument: it starts execution of generator and returns the result of first `yield`
  2. - result of `yield` is available in outer code. Any async operators can be executed. Generator paused.
  3. - 
*/
export function* gen() {
  let result = yield "2 + 2 ?"
  console.log(result)
}

let g = gen() 
g.next().value // 1
// 2
setTimeout(() => g.next(4), 2000) // 3


/*
  generator.throw(E) 

  use instead of next() to translate error into generator
*/


/*
  Flatten Async Code
  
  Flow:
    - Yield promices
    - Create Executor, that execute next promice after resolving previous one  

*/

export function execute(generator, yieldValue) {
  let {value: promise, done} = generator.next(yieldValue)

  if(!done) {
    promise.then(
      (result) => executor(generator, result),
      (error) => generator.throw(error)
    )
  } else {
    console.log('Execution is successfull') 
  }
}

export function* fetchGithubUser(user) {
  try {
    let userFetch = yield fetch(`https://api.github.com/users/${user}`)  // Promice
    let userData = yield userFetch.json()  // Promice
  } catch(e) {
    console.log(e);
  }
  yield new Promise(resolve => setTimeout(resolve, 3000)) // add custom delay

  return userData
}



/*
  CO library

  1 - simplest example: return 1 after one second pass
  2 - add `then`
  3 - throwed error isn't appears in outer code
  4 - proper error handling with `catch`
*/

// 1
// co(function* () {
//   let result = yield new Promise(
//     resolve => setTimeout(resolve, 1000, 1)
//   )
//   console.log(result)
// })

// // 2
// co(function* () {
//    let result = yield new Promise(
//     resolve => setTimeout(resolve, 1000, 1)
//   );
//   return result;
// }).then(alert);

// // 3
// co(function*() {
//   throw new Error("Sorry that happened");
// })

// // 4
// co(function*() {
//   throw new Error("Sorry that happened");
// }).catch(alert)
