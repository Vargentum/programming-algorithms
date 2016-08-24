/*1. 1 2 3 ( < ES6 -> Syntax Error) */

function foo(arg = 1) {
  return function() {
    return arg++;
  }
}

var bar = foo();
console.log(bar());
console.log(bar());
console.log(bar());


/*2. 2 2 2
functions reinitilized*/

function foo(argOuter = 1) {

  return function(argInner = 1) {

    return argInner + argOuter++;
  }
}

console.log(foo()());
console.log(foo()());
console.log(foo()());


/*3. NaN 
i resolves as `undefined` from arguments */
function foo() {
  var i = 10;
  function bar(i) {
    var diff = 100 - i;
    console.log(diff);
  }
  return bar;
}
foo()();


/*4. 11 */

function foo() {
  var i = 10;
  var bar = function() {
    console.log(i);
  }
  ++i;
  return bar;
}
foo()();


/*5. 2 7 1 7
second initCounter() change logCounter, but oldNumber stores the previous function */

var logCounter, increaseCounter, setCounter;
function initCounter() {
  var number = 1;
  logCounter = function() { console.log(number); }
  increaseCounter = function() { number++; }
  setCounter = function(numArg) { number = numArg; }
}

initCounter();
increaseCounter();
logCounter();
setCounter(7);
logCounter();

var oldNumber = logCounter;
initCounter();
logCounter();
oldNumber();


/*6. undefined (incorrect)
Right answer: 'bar' (bar hosted, but log returned after bar resolving, and log.scope.bar is defined*/

function foo() {
  var log = function() { console.log(bar); }
  var bar = 'bar';
  return log;
}
foo()();


/*7. 8 8 
foo has `a === 3` at its own scope */

var a = 3;
function foo() {
  var b = a + 5;
  return b;
}
function bar() {
  var a = 7;
  return foo();
}
(function baz() {
  var a = 10;
  console.log(foo());
  console.log(bar());
}());


/*8. 10 10 10
foo always refers to 10 stored in `closure`  */

var number = 10;

function foo() {
  console.log(number);
}
foo();

(function () {
  var number = 20;
  foo();
})();

(function (arg) {
  var number = 30;
  arg();
})(foo);


/*9. 0 0 0 
reinitilization + postfix I*/

function counter() {
  var index = 0;
  return function() {
    return index++;
  }
}

var foo = [];
for (var i = 0; i < 3; i++) {
  foo[i] = function() {
    console.log(counter()());
  };
}

foo[0]();
foo[1]();
foo[2]();


/*10. 3 3 3 (incorrect)
Right answer: 4 4 4 (postfix increment AFTER returning a value */
var index = 0;
(function(i) {
  while (i++ < 3) {
    setTimeout(function() { console.log(i); }, i * 100 );
  }
})(index);



/*11. foo */

(function(a) {
  return (function(b) {
    console.log(a);
  })('bar')
})('foo');


/*12. 
13 (y from foo args + x from foo Scope) 
103 (y from foo args + x from foo Scope) */

var x = 2;
var y = 5
function foo(y) {
  return x + y;
}
function bar() {
  x++;
  console.log(foo(10));
}

function baz() {
  y++;
  console.log(foo(100));
}

bar();
baz();

