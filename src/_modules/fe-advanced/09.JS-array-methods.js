/*1. */
var array = [1, 2, 3, 4, 5, 6, 7];
var r = 0;
function foo(x, y) {
  if(y < arguments[2].length / 2) {  // y < 3.5 => 1 2 3
    r += x;
  }
}
array.forEach(foo);
console.log(r);


// NaN
// undefined
// 10
// TypeError
// 28
// 6         +++
// 3
// 0


/*2. */
var array = [1, 2, 3, 4]; 
var r = 0;
array.forEach(function (a, b, c, d) {
  r += c[b]; // 1 + 2 + 3 + 4
});
console.log(r);

// 28
// 0
// undefined
// 3
// NaN
// TypeError
// 6
// 10             +++


/*3. */

var array = [1, 2, 3, 4, 5]; // [1*1-0, undefined, 3*3-1 , undefined, 5*5-1] 
function foo() {
  if(arguments[0] % 2) return arguments[0] * arguments[0] - 1;
}
console.log(array.map(foo));

// 0, undefined, 8, undefined, 24    +++
// 1, undefined, 9, undefined, 25
// 0, 2, 8, 4, 24
// 0, NaN, 8, NaN, 24
// 0, null, 8, null, 24


// 4. 
var array = [1, 2, 3, 4, 5]; // [1-0, 2-1,3-2,4-3 ...]
console.log(array.map(function(a, b) {
  return a - arguments[1];
}));

// 0, null, null, null, null
// 1, 2, 3, 4, 5
// 0, 0, 0, 0, 0
// 5, 5, 5, 5, 5
// undefined, NaN, NaN, NaN, NaN
// 1, 1, 1, 1, 1                      ++++


/*5.*/

var array = [1, 2, 3, 4, 5];
function foo(x1, x2, x3, x4, x5) {
  x2 = (x2 || (x1 + x4) || x3 || x5) // i || NaN ... => (x2 is Index)
  return x2 % 2 == 0;                // [0,1,2,3,4] => [1,3,5]
}
console.log(array.filter(foo));

// 1, 3, 5         +++ (check index, not value)
// 1, 2, 3, 4, 5
// TypeError
// 2, 4           
// 3, 5
// 2, 4, 4, 5



// 6. 
var array = [1, 2, 3, 4, 5];
console.log(array.filter(function () {
  return arguments[0] > 4;
}
));

// 4
// TypeError
// 5
// undefined
// 1
// 4, 5         +++



// 7.

console.log( [].some(function() { return true; }) );   // false
console.log( [].every(function() { return false; }) ); // true  (Vacuos truth)

// undefined, undefined
// true, true
// TypeError
// false, false
// true, false
// NaN, NaN
// false, true  +++


// 8.

console.log( [10, 20, 30, 40, 50, 60, 70].every(function() {  // true 
  return arguments[1] < 10;
}));

console.log( [10, 20, 30, 40, 50, 60, 70].some(function() {  // true
  return arguments[1] == 0;
}));

// undefined, undefined
// false, true
// false, false
// NaN, NaN
// true, false
// TypeError
// true, true   +++


// 9.

var array = [1, 2, 3, 4, 5];  // -10 + 15 === 5
console.log(
  array.reduce(function () {
    return arguments[0] + arguments[1];
  }, -10)
);

// 15
// -5
// 25
// 0
// 5    +++



// 10. 
var array = [1, 2, 3, 4, 5];  // -2 * 5! === -240
console.log(
  array.reduce(function (x, y, z) {
    return arguments[0] * y;
  }, -2)
);

// -20
// -14
// -240    +++
// 15
// -150
// -200


// 11.

var array = [1, 2, 3, 4, 5];  // 1 > 10 ==> 10, 
console.log(
  array.reduce(function (a, b) {
    return (a > b) ? a : b;
  }, 10)
);

// 3
// 1
// undefined
// 5
// 10    +++


// 12. 

function foo(x, y) {
  var z = 2;
  while (z <= Math.sqrt(x)) {  // 2 <= 2
    if (x % z++ < 1) return false;
  }
  return x > 1;
}
console.log([4, 6, 8, 12].find(foo)); // 4 
console.log([4, 5, 8, 12].find(foo)); // 

// undefined, 5
// 4, 6           + (?)
// 5, 12
// 12, undefined
// undefined, undefined


// 13.

var a = [
  [ 10, 20, 30, 40], // i == j => [10, 4, -9, -3] any < x , so first is returned (10)
  [-10, 4, -3, 0],
  [ 15, 12, -9, 0],
  [ 15, 7, -6, -3]
];
var i, j, x = Number.MAX_SAFE_INTEGER;
for(i = 0; i < a.length; i++) {
  for(j = 0; j < a.length; j++) {
    if(i == j && a[i][j] < x) {
      x = a[i][j];
    }
  }
}
console.log(x);

// 0
// 10   +++
// -9
// -10
// -3
// NaN


// 14.
var a = [
  [ 15, 0, -9, 0],
  [ 40, 30, 20, 10],
  [ 15, 7, -6, -3],
  [-10, 4, -3, 0]
];
var i, j, y = Number.MIN_SAFE_INTEGER;   // [0,20,7,-10] => 20

for(i = 0; i < a.length; i++) {
  for(j = a.length - 1; j >= i; j--) {
    if( a[i][j] > y ) {
     y = a[i][j];
    }
  }
}
console.log(y);

// 0
// 20         +++
// 30
// NaN
// -6
// 40
// -9


// 15.
var a = [
  [ null, {}, -9, 0],
  [ 40, [30, 4], 20, function(){}],
  [ "foo", 7, -6, -3],
  [function(){}, Number(2), -3, [0, {}]]
];

var i, j, count = 0;
for(i = 0; i < a.length; i++) {           // [null, [30,4], -6, [0, {}]]
  for(j = 0; j < a.length; j++) {
    if( typeof a[i][j] == "object" ) {
      ++count;
    }
  }
}
console.log(count);

// 0
// 4
// 5
// 2        +++
// 3
// 1
// 6


// 16.  [10,20, -5,5, -20,-10]

var foo = [[-20, -10], [-5, 5], [10, 20]].reduceRight(function() {
  return arguments[0].concat(arguments[1]);
}, []);
console.log(foo);


// 0, 10, 20, 30, 40, 50
// -50, -40, -30, -20, -10, 0
// 50, 40, 30, 20, 10, 0
// 0, 0, 0, 0, 0, 0
// 0, -10, -20, -30, -40, -50
// 10, 20, -5, 5, -20, -10        +++