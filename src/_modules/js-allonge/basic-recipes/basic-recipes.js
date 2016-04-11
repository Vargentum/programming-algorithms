'use strict';

import 'babel-polyfill'
import {mapWith} from '../unsorted/unsorted'


export default (function BasicRecipes () {


  /*CALLFIRST & CALLLAST: PA decorators: helps insert fisrt or last arguments */

  // My first developed version
  // const callFirst = (fn, lArg) => (...rest) => fn(lArg, ...rest)
  // const callLast = (fn, rArg) => (...rest) => fn(...rest, rArg)

  //Imroved version to provide multiple first/last arguments
  const callFirst = (fn, ...args) => (...rest) => fn(...args, ...rest)
  const callLast = (fn, ...args) => (...rest) => fn(...rest, ...args)


  /*
  UNARY arg decorator

  problem: [1,2,3].map(parseFloat) // [1, undefined, undefined]
  why? parseFloat(item, index, array) => incorrect arguments provided to function
  way 1: [1,2,3].map(x => parseFloat(x))
  way 2: unary decorator: [1,2,3].map(unary(parseFloat))
  */


  const unary = (fn) => (...args) => fn(args[0])

  /* Recipe from book: seems they are equal

    const unary = (fn) =>
      fn.length === 1
        ? fn
        : function (something) {
            return fn.call(this, something)
          }
  */




  /* TAP
  useful for logging
  Example of K combinator (kestrel):
    (x) => (y) => x
  */
  const tapCurried = (value) =>
    (fn) => {
      typeof fn === 'function' && fn(value)
      return value
    }

  const tap = (value, fn) => {
    let curried = (fn) => (
      typeof fn === 'function' && fn(value),
      value
    )
    return fn === undefined ?
      curried
      :
      curried(fn)
  }
  // tap('Vlad')((name) => console.log(`my name is ${name}`))// "My name is Vlad"
  // tap('Vlad', (name) => console.log(`my name is ${name}`))// "My name is Vlad"



  /*THRU: same as tap, but return processed values*/
  const thru = (value, fn) => {
    let curried = fn => typeof fn === 'function' ? fn(value) : value
    return fn === undefined ? curried : curried(fn)
  }

  //custom thru for string
  const thruStr = (fn) => (str) => {
    return str
      .split(' ')
      .map(fn)
      .join('')
  }



  /*MAYBE
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



  /* ONCE
    Executes function only once. For other calls returns undefined
  */

  const once = (fn) => {
    let done = false
    return function () {
      return done ? undefined : ((done = true), fn.apply(this, arguments))
    }
  }

  const __slice = Array.prototype.slice
  



  /*
    Left / Right Variadic
    
    rV(a,b) f.length 2
    rv(1,2,3,4) f.arguments 3

  */
  const rightVariadic = (fn) => {
    if (fn.length < 1) return fn
    return function(...args) {
      const gathered = args.slice(fn.length - 1)
          , spread   = args.slice(0, fn.length - 1);
      
      return fn.apply(this, spread.concat([gathered]))
    }
  }

  const leftVariadic = (fn) => {
    if (fn.length < 1) return fn;
    return function (...args) {
      const gathered = args.slice(0, args.length - fn.length + 1)
          , spread   = args.slice(args.length - fn.length + 1);

      return fn.apply(this, [gathered].concat(spread));
    }
  };
  const butLastAndLast = leftVariadic((butLast, last) => [butLast, last]);
  // butLastAndLast('why', 'hello', 'there', 'little', 'droid')
    //=> [["why","hello","there","little"],"droid"]



  return {
    callFirst
    ,callLast
    ,unary
    ,tap
    ,thru
    ,thruStr
    ,maybe
    ,once
    ,rightVariadic
    ,leftVariadic
  }
})()