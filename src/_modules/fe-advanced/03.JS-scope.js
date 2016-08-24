/*1. wuzz 
was resolved from `qux` LEX 
Right answer: buzz - because `qux` scope is outer for `bar` */

var foo = "buzz";
var bar = function(){
  return foo;
};
var qux = function(baz){
  var foo = "wuzz";
  return baz();
};
console.log(qux(bar));


/*2. wuzz
same as 1
Right answer: bazz - because `qux` scope is outer for `bar`, and `foo` was mutated */

var foo = "buzz";
var bar = function(){
  return foo;
};
var qux = function(baz){
  var foo = "wuzz";
  return baz();
};
foo = "bazz";
console.log(qux(bar));


/*3. wuzz
foo changes globally, and resolves with new value */

var foo = "buzz";
var bar = function(){
  return foo;
};
var qux = function(baz){
  foo = "wuzz";
  return baz();
};
console.log(qux(bar));



/*4. 0 0 0 
postfix increment return unchanged value 
Right answer:  0 1 2
in first call, foo will overwrite itself, with saving reference to i (??),   */

var foo = function() {
  var i = 0;
  foo = function() {
    return i++;
  }
  return foo();
};
console.log(foo());
console.log(foo());
console.log(foo());



/*5. 1 1 1
prefix increment + reinitialization*/


function makeCounter() {
  var count;
  return function() {
    count = 0;
    return ++count;
  };
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());



/*6. true true ReferenceError???
(this === window) */

var foo = function() { };
function bar() { } 
(function baz() { });

console.log(this.foo == foo);
console.log(window.bar == bar);
console.log(this.baz == baz);



/*7. 600
all variables will be resolved*/
var g = 100;
(function foo() {
  var f = 200;
  (function bar() {
    var b = 300;
    console.log(g + f + b);
  })();
})();


/*8. 600
same as 7*/

var g = 100;
function foo() {
  var f = 200;
  return function bar() {
    var b = 300;
    console.log(g + f + b);
  };
};
(foo())();



/*9. 5
i will be lookuped after loop cycle */

var array = [];
for (var i = 0; i < 5; i++) {
  array[i] = function() {
    console.log(i);
  }
}
array[3]();


