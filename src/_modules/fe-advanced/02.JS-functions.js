// Что будет выводиться в консоли браузера после клика по элементу:
// <div id="div">Click on me to see hello</div>

function ShowHello(element) {
  this.hello = 'Hello world!';
  this.onClickHandler = function(event) {
    console.log(this.hello);
  };

  element.addEventListener('click', this.onClickHandler, false);
}

var divElement = document.getElementById('div'),
hello = new ShowHello(divElement);

/*3. undefined, this === globalObject */


/*Что будет выводиться в консоли браузера:*/
var functions = ["foo", "bar", "qux", "baz"];
functions.show = function() {
  console.log(this);
};

setTimeout(functions.show, 100);

/*4. globalObject */


// Что будет выводиться в консоли браузера:
for(var i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

/*5. 6 6 6 6 6 */


console.log(typeof (function() { })());

/*6. undefined
function invocation has max priority */


var foo = function() {
  console.log("7.foo");
  foo = function() {
    console.log("7.qux");
  };
};
foo();
foo();

/*7. "foo" "qux"
because global variable `foo` will be overriden */


var foo = function() {
  console.log("8.foo");
  foo = function() {
    console.log("8.qux");
  };
};
var bar = foo;

bar(); // 
bar();
foo() // '9.qux'

/*8. "foo" "foo"
pointer bar will save reference to origin `foo`
*/


var foo = function() {
  console.log("9.foo");
  foo = function() {
    console.log("9.qux");
  };
};
var baz = {
  prop: foo
};

baz.prop();
baz.prop();

/*9. "foo" "foo"
pointer baz.prop will save reference to origin `foo`
*/

var foo = function() {
  console.log("10.foo");
  foo = function() {
    console.log("10.qux");
  };
};
foo.prop = "bar";
foo();
foo();
console.log(foo.prop);

/*10: foo, qux, undefined
no pointer*/


var foo = function() {
  console.log("11.foo");
  foo = function() {
    console.log("11.qux");
  };
};
foo.prop = "baz";
var bar = foo;

bar();
bar();
console.log(bar.prop);

/*11. "foo" "foo" baz
pointer bar will save reference to origin `foo`
*/


var foo = function() {
  console.log("12.foo");
  foo = function() {
    console.log("12.qux");
  };
};
foo.prop = "baz";
var bar = {
  prop: foo
};

bar.prop();
bar.prop();
console.log(bar.prop.prop);

/*12. "foo" "foo" baz
pointer bar will save reference to origin `foo`
*/
