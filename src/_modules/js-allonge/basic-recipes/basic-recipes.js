'use strict';

export default function BasicRecipies () {
  

  //First last args manipulate decorators

  // My first developed version
  // const callFirst = (fn, lArg) => (...rest) => fn(lArg, ...rest)
  // const callLast = (fn, rArg) => (...rest) => fn(...rest, rArg)

  //Imroved version to provide multiple first/last arguments
  const callFirst = (fn, ...args) => (...rest) => fn(...args, ...rest)
  const callLast = (fn, ...args) => (...rest) => fn(...rest, ...args)


  const greet = (from, to) => `Hello ${to}, my name is ${from}`
 
  const greetFromVlad = callFirst(greet, 'Vlad')
  console.log(greetFromVlad('Tom'))

  const greetToMary = callLast(greet, 'Mary')
  console.log(greetToMary('Tom'))



  /*
  Unary arg decorator

  problem: [1,2,3].map(parseFloat) // [1, undefined, undefined]
  
  why? parseFloat(item, index, array) => incorrect arguments provided to function

  way 1: [1,2,3].map(x => parseFloat(x))

  way 2: unary decorator: [1,2,3].map(unary(parseFloat))

  */


  const unary = (fn) => (...args) => fn(args[0])
  console.log(['1','2','3'].map(unary(parseFloat)))


  /* Recipe from book: seems they are equal

    const unary = (fn) =>
      fn.length === 1
        ? fn
        : function (something) {
            return fn.call(this, something)
          }
  */

}
