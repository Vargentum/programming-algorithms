/*1. */
function foo() {
  console.log(this);
  "use strict";
  console.log(this);
}
foo();

// undefined, window
// ReferenceError
// window, window
// undefined, undefined
// window, undefined      +++


/*2. foo foo foo undefined undefined*/

var foo = {
  text: "foo",
  method: function() {
    return this.text;
  }
};

var bar, baz, t1, t2, t3, t4, t5;
t1 = foo.method();
t2 = foo["method"]();
t3 = (foo.method)();
t4 = (bar = foo.method)();
t5 = (baz || foo.method)();

console.log(t1, t2, t3, t4, t5);

// foo, undefined, undefined, undefined, undefined
// foo, foo, foo, foo, undefined
// foo, foo, foo, undefined, undefined   +++
// foo, foo, foo, foo, foo
// foo, foo, undefined, undefined, undefined
// foo, undefined, foo, undefined, undefined


/*3. 
call: x y z 
apply: a b c */

function foo(arg1, arg2) {
  console.log(this);
  console.log(arg1);
  console.log(arg2);
}
foo.call('x', 'y', 'z');
foo.apply('a', ['b', 'c', 'd']);

// this, x, y, z, this, a, b, c, d
// this, y, z, this, b, c, d
// x, y, z, a, b, c                   +++
// x, y, z, a, b, c, d
// this, y, z, this, b, c


/*4.
foo... window window window   */

function foo() {
  console.log(this);

  return function () {
    console.log(this);
  };
}
(new foo())();
(foo())();

// foo(){}, foo(){}, window, window
// foo(){}, window, window, undefined
// foo(){}, foo(){}, window, undefined
// foo(){}, window, window, window
// foo(){}, undefined, window, undefined


/*5. 
foo() 20  both values had been written to global 
new foo() 10     20 leaks to global*/


function foo() {
  this.prop = 10;
  (function() {
    this.prop = 20;
  })();
  console.log(this.prop);
};

foo();
new foo();

// 10, 10
// ReferenceError
// 20, 10
// 20, 20
// 10, 20


/*6. foo undefined */

var foo = {
  prop: "foo",
  method: function() {
    console.log(this.prop);
  }
};

foo.method();
new foo.method();

// undefined, foo
// ReferenceError
// undefined, undefined
// foo, undefined
// foo, foo


/*7. Bob Tom */

var people = [
  { name: 'Bob' },
  { name: 'Tom' }
];

for(var i = 0; i < people.length; i++) {
  (function(i) {
    this.log = function() {
      console.log(this.name);
    };
    this.log();
  }).call(people[i], i);
}

// Tom, Tom
// Bob, Tom
// ReferenceError
// TypeError
// undefined, undefined
// object, object


/*8. */
function fixStatement() {
  var statement = [this.first, 'is', this.second, 'language'].join(' ');
  console.log(statement);
}

var brokenStatement = {
  first: 'JavaScript', second: 'awesome'
};

fixStatement.call(this, brokenStatement);

// TypeError
// ReferenceError
// undefined is undefined language    +++ (global translated)
// JavaScript is awesome language
// is language


/*9. 101 */

function bar() {
  var sum = 1;
  for(var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log( sum );
}
function foo(a, b, c, d) {
  bar.apply(this, arguments);
}
foo(10, 20, 30, 40);

// 101
// ReferenceError
// undefined
// NaN
// 1
// TypeError


/*10. */

function bar(arg1, arg2){
  console.log(this.prop, arg1, arg2);
} 

var bazObj = {
  prop: 30,
  foo: function (x, y) {
    bar.apply(this, arguments);
  }
};

bazObj.foo(10, 20);



// 30, 10, 20                         +++
// undefined, undefined, undefined
// 10, 20, 30
// 10, 20, undefined
// undefined, 10, 20


/*11. */

var bar = { prop: "bar" };
var foo = function() {
  return function () {
    console.log(this);
  };
}.bind(bar);

foo()();

// window
// TypeError
// Object { prop: "bar" }     +++ (binded)
// ReferenceError
// undefined


/*12. */

<div id="div">Click on me to see hello</div>

function ShowHello(element) {
  this.hello = 'Hello world!';
  this.onClickHandler = function(event) {
    console.log(this.hello);
  };

  element.addEventListener('click', this.onClickHandler.bind(this), false);
}

var divElement = document.getElementById('div'),
hello = new ShowHello(divElement);

// [object Window]
// Hello world!'     +++ (binded)
// TypeError
// undefined


/*13. false, 2 */

function Rectangle(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;

  this.getSquare = function() {
    return (x2 - x1) * (y2 - y1);
  }
}
var rect1 = Rectangle(2, 3, 7, 7).getSquare();  // 7 - 2 * 7 - 3 == 20
var rect2 = Rectangle(4, 1, 10, 5).getSquare(); // 10 - 4 * 5 - 1 == 24
var rect3 = Rectangle(3, 7, 5, 8).getSquare();  // 5 - 3 * 8 - 7 == 2

console.log(rect1 > rect2, rect3); // false, 2

// TypeError
// true, 2
// true, undefined
// false, 2
// false, undefined