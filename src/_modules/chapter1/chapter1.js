'use strict';

import _ from 'lodash';

export default function Chapter1 () {

  let log2 = (n) => Math.log(n) / Math.LN2

  let compareComplexity = (a1, a2) => {
    let n = 2
    while (true) {
      if (a1(n) > a2(n)) break
      n++
    }
    // console.log(n)
    return n
  }


  // 

  //Exersices 1.2.2: При каком n сортировка b1 будет выполняться дольше чем b2
  let b1 = n => 8 * n * n //вставка
  let b2 = n => 64 * n * log2(n) //слияние
  compareComplexity(b1, b2) 
  //Answer 44


  //Exersice: 1.2.3: При каком n сортировка a2 будет медленнее чем а1
  let a1 = n => 100 * n * n
  let a2 = n => Math.pow(2, n)
  compareComplexity(a2, a1) 
  //Answer 15



  // Task 1.1: compare complexity lists for timing values


  let t = {
    second: 1000
  }
  t.minute = t.second * 60
  t.hour = t.minute * 60
  t.day = t.hour * 24
  t.month = t.day * 30
  t.year = t.month * 12
  t.age = t.year * 1000


  let f = {
    log2: n => log2(n),
    sqrt: n => Math.sqrt(n),
    n: n => n,
    nlog2: n => n * log2(n),
    'n^2': n => Math.pow(n, 2),
    'n^3': n => Math.pow(n, 3),
    '2^n': n => Math.pow(2, n),
  }

  _.forIn(t, (tv, tk) => {
    _.forIn(f, (fv, fk) => {
      // console.log(`n by ${tk} for ${fk} is ${Math.round(fv(tv))}`)
    })
  })


}
