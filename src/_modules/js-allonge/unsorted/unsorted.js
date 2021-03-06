'use strict';

export default (function Unsorted () {

  // DECORATOR examples



  // 1. compose

  const reverse = str => str.split('').reverse().join('')
  const simplify = str => str.replace(/[^0-9a-z]/gi, '').toLowerCase()

  const compose = (a, b) => (c) => a(b(c))
  const simplifiedReverse = compose(reverse, simplify)

  // console.log(simplifiedReverse('Doc, note,')) //etoncod




  // 2. mapWith

  const mapWith = (fn) => (array) => array.map(fn)
  const squareArray = mapWith(n => n * 2)

  // console.log(squareArray([1,2,3])) // [2,4,6]





  // Fat arrow scope

  const scopeOuter = function() {
    return mapWith((cell) => cell * arguments[0])([1,2,3,4,5])
  }

  const scopeInner = function() {
    return mapWith(function (cell) { return cell * arguments[0]})([1,2,3,4,5])
  }

  // console.log(scopeOuter(5)) // [5,10,15,20,25]  //cell * 5
  // console.log(scopeInner(3)) // [2,4,6,8,10]  //cell * cell





  /* ------------------------------------------
    Chapter 4
  ------------------------------------------ */


  // /*Bounding through local envirnoment*/
  // var a = [1,2,3]
  // ((b) => {
  //   a === b //true
  // })(a)


  // /*rebinding vs mutating*/
  // var base1 = [1,2,3]
  // ((alias1) => {
  //   alias1 = [3,2,1]
  // })(base1)
  // /*
  //   [1,2,3] unchanged! 
  //   beause rebinds only inner scoped variable
  // */
  
  // var base2 = [1,2,3]
  // ((alias2) => {
  //   alias2[0] = [3]
  // })(base2)
  // /*
  //   [3,2,3] mutated!
  //   because mutation touches all same referenced values
  // */



  // //Hoisting
  // var a = 'outer'
  // (() => {
  //   console.log(a) //undefined !!! declaration before execution

  //   if (true){
  //     // var a = 'inner' disable by syntax error
  //     console.log(a) //'inner'
  //   }
  // })()



  /* ------------------------------------------
    Chapter 6: Data 
  ------------------------------------------ */
  // Tail-call optimization

  //non-optimized function: has to save stack for each recursive call

  const factorial = (n) => 
    n ? 1 : n * factorial(n-1)

  //make recursive call to tail position
  const factorialOptimized = (n, result = 1) =>
    n === 1
      ? result
      : factorialOptimized(n-1, n * result)



  /* ------------------------------------------
    Linked lists

    fast: for retreiving head and tail
    slow: iteration
  ------------------------------------------ */
  const cons = (a,b) => [a,b]
  const car = ([a,b]) => a
  const cdr = ([a,b]) => b
  
  const linked = cons(1,cons(2,cons(3,cons(4, cons(5, null)))))
  linked // [1,[2,[3,[4,[5,null]]]]]

  car(linked) // 1
  cdr(linked) // [2,[3,[4,[5,null]]]]





  return{compose, mapWith, factorialOptimized}
})()