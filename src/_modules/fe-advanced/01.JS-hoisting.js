(function() {
  var foo = 'qux';
  function foo() { foo = "qux"; }
  console.log(foo);
}());
/*1. 'qux'
FD has priority on `var` in hoisting order, so 
value of variable should be otputted
*/


(function() {
  var foo;
  function foo() { foo = "qux"; }
  console.log(foo);
}());

/*2. undefined
Right answer: function foo() { foo = "qux"; }
declared variable can't override FD? */


(function() {
  var foo = undefined;
  function foo() { foo = "qux"; }
  console.log(foo);
}());

/*3. undefined */


(function() {
  console.log(foo);
  var foo = 'qux';
  function foo() { foo = "qux"; } 
}());

/*4. undefined 
Right answer: function foo() { foo = "qux"; } 
declared variable can't override FD? 
*/


(function() {
  function bar() {
    if ( !foo ) foo = "qux";
    console.log(foo);
  }
  var foo = "baz";
  bar();
}());

/*5. baz 
`foo` has already hosted and captured by LEX
*/


(function() {
  function bar() {
    if ( foo ) {var foo = "qux";}
    console.log(foo);
  }
  var foo = "baz";
  bar();
}());

/*6. undefined
foo in bar was hosted
*/


(function() {
  function bar() {
    if ( foo ) foo = "qux";
    console.log(foo);
  }
  var foo = "baz";
  bar();
}());

/*7. qux */


(function() {
  var foo = "baz";
  function bar() {
    foo = "qux";
    return;
    function foo() { foo = "qux"; }
  }
  bar();
  console.log(foo);
}());

/*8. function foo() { foo = "qux"; } 
Interpreter looks everywhere

Right answer: "baz"
var foo = 'baz' overrides the function 
*/







function count (start, end, callback) {
  var res = callback(start)
  if (res > end) return
  console.log(res)
  setTimeout(count.bind(null, res, end), 1000)
}

count(1, 6, function(a) {return a + 1})




