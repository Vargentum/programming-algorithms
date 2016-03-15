'use strict';

import 'babel-polyfill'
import {mapWith} from '../unsorted/unsorted'


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
  // console.log(greetFromVlad('Tom'))

  const greetToMary = callLast(greet, 'Mary')
  // console.log(greetToMary('Tom'))



  /*
  Unary arg decorator

  problem: [1,2,3].map(parseFloat) // [1, undefined, undefined]
  
  why? parseFloat(item, index, array) => incorrect arguments provided to function

  way 1: [1,2,3].map(x => parseFloat(x))

  way 2: unary decorator: [1,2,3].map(unary(parseFloat))

  */


  const unary = (fn) => (...args) => fn(args[0])
  // console.log(['1','2','3'].map(unary(parseFloat)))


  /* Recipe from book: seems they are equal

    const unary = (fn) =>
      fn.length === 1
        ? fn
        : function (something) {
            return fn.call(this, something)
          }
  */




  /* K combinator (kestrel):
    (x) => (y) => x  

    exapmle tap
  */

  const tap = (value) =>
    (fn) => {
      typeof fn === 'function' && fn(value)
      return value 
    }

  // tap('Vlad')((name) => console.log(`my name is ${name}`))// "My name is Vlad"



  const tapUniversal = (value, fn) => {

    let curried = (fn) => (
      typeof fn === 'function' && fn(value),
      value
    )

    return fn === undefined ? 
      curried 
      : 
      curried(fn)
  }


  // tapUniversal('Vlad')((name) => console.log(`my name is ${name}`))// "My name is Vlad"
  // tapUniversal('Vlad', (name) => console.log(`my name is ${name}`))// "My name is Vlad"



  /*Thru*/
  const thru = (value, fn) => {
    let curried = fn => typeof fn === 'function' ? fn(value) : value
    return fn === undefined ? curried : curried(fn)
  }




  /*'maybe' decorator
    
    execute function only if all params isSomething
    else undefined

  */
  const isSomething = (val) => val !== null && val !== undefined

  const maybe = (fn) =>
    function (...args) {
      if (args.length === 0) return 
      for (let arg of args) {
        if (!isSomething(arg)) {
          return 
        }
      }
      return fn.apply(this, args)
    } 

  // console.log(maybe((a,b,c) => a + b + c)(1,2,3)) //6
  // console.log(maybe((a,b,c) => a + b + c)(1,null,3)) // undefined






  /* 'once' decorator
    
    Executes function only once. For other calls returns undefined
  */

  const once = (fn) => {
    let done = false
    return function () {
      return done ? undefined : ((done = true), fn.apply(this, arguments))
    }
  }

  let onceGreet = once(() => "Only once")
  // console.log(onceGreet()) // "Only once"
  // console.log(onceGreet()) // undefined
  

}




