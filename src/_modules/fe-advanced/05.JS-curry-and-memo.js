/*1. Выберите корректные варианты каррирования функции foo:
    Answer: (curry(foo)(1, 2, 3));  
    Returns Function
    */ 
function curry(func) {
  var oldArgs = Array.prototype.slice.call(arguments, 1); // ...tail
  return function() {
    var newArgs = Array.prototype.slice.call(arguments), // args
    args = oldArgs.concat(newArgs);
    return func.apply(null, args);
  }
}


function foo(x, y, z) {
  return x + y + z;
}

/*
(curry(foo)(1, 2, 3))();
(curry(foo, 1, 2)(3)());
(curry(foo)(1, 2, 3));
*/



/*2. Выберите НЕ корректные варианты каррирования функции foo: */

function curry(func) {
  var oldArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = Array.prototype.slice.call(arguments),
    args = oldArgs.concat(newArgs);
    return func.apply(null, args);
}
}

function foo(x, y, z) {
  return x + y + z;
}


// curry(foo, 1, 2, 3)();
// curry(foo)(1, 2, 3);     
// curry(foo)(1)(2)(3);     +++
// curry(foo, 1)(2)(3);     +++
// curry(foo, 1, 2)(3);
// curry(foo)(1, 2)(3);     +++  3 calls, no function to return :(



/*3. Answer: 5 */

function curry(func) {
  var oldArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = Array.prototype.slice.call(arguments),
    args = oldArgs.concat(newArgs);
    return func.apply(null, args);
  }
}

function foo(x, y, z) {
  return x + y + z;
}

function bar(x, y, z) {
  return x + y + z;
}



var foo1 = curry(foo, 1);  // (...a2) => ... [1]
var foo2 = curry(bar, 2);  // (...a2) => ... [2]
var foo3 = curry(foo2, 3); // (...a2) => ... [3,2]
console.log(foo3()); // 5



/*4. Answer: 10 */

function curry(func) {
  var oldArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = Array.prototype.slice.call(arguments),
    args = oldArgs.concat(newArgs);
    return func.apply(null, args);
  }
}

function foo(x, y) {
  return x + y;
}

var foo1 = curry(foo, 1);    // [1] 
var foo2 = curry(foo1, 2);   // [1,2]
var foo3 = curry(foo2, 3);   // [1,2,3]
var foo4 = curry(foo3, 4);   // [1,2,3,4]
console.log(foo4()); // 10



/*5. В каких случаях в консоли браузера будет выводиться цифра 4?
     Answer: необходимо 3 вызова функции чтобы вернуть примитив */

function curry(func) {
  var oldArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = Array.prototype.slice.call(arguments),
    args = oldArgs.concat(newArgs);
    return func.apply(null, args);
  }
}
const curry = (fn, ...a1) => (...a2) => fn(...[[...a1], [...a2]])

// console.log( curry(Math.max)(1, 2, 3)(4) );    +++ 3
// console.log( curry(Math.max)(1)(2)(3)(4) );    
// console.log( (curry(Math.max)(1, 2, 3, 4)) );
// console.log( curry(Math.max, 1, 2)(3, 4) );
// console.log( curry(Math.max, 1)(2, 3, 4)() );  +++ 3
// console.log( curry(Math.max, 1, 2, 3, 4)() );  


/*6. 2 - because of Array of defined variables length */


function foo(x1, x2, x3, x4, x5) {
  x1 = 10;
  x2 = "I'm foo!";
  x3 = undefined;
}
console.log(foo.length);



/*7. Что будет выводиться в консоли браузера:

2 cache [..,..,1*2]
9 cache [..,..,3,3 * 3]
36 cache [..,..,3,9, 9 * 4] ??? answered: 16

*/ 

var f = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (f.cache[n] > 0) { //exit from F
    return f.cache[n];
  }
  return f.cache[n] = f(n - 1) * n;
};
f.cache = [];

console.log(f(2), f(3), f(4));

// 2, 9, 16
// 0, 4, 6
// 1, 6, 12
// 2, 6, 24
// 6, 12, 20


/*8. Что будет выводиться в консоли браузера:

5  cache [..,..,1 + 2 * 2]
14 cache [..,..,5, 5 + 3 * 3]
30 cache [..,..,3,9, 6 + 4 * 4]  beauty of math :)
*/

var f = function(n) {
  if (n === 0 || n === 1) {
  return n;
  }
  if (f.cache[n] >= 2) {
    return f.cache[n];
  }
    return f.cache[n] = f(n - 1) + n * n;
};
f.cache = [];

console.log(f(2), f(3), f(4));

// 4, 9, 16
// 5, 10, 17
// 5, 14, 30
// 6, 12, 20
// 4, 10, 18



/*9. Функция подсчитывает среднее n чисел, 
которые генерируются случайно при каждом вызове функции. 
Будет ли целесообразно использовать механизм мемоизации для 
данной функции с точки зрения быстродействия при ее многократных вызовах?*/

function randomSum(n) {
  var i, r, sum = 0;
  for (i = 0; i < n; i++) {
    r = Math.random();
    sum += r;
  }
  return sum / n;
}



