/*1. */

var parent = {
  foo: null
};
var child = {
  foo: "foo"
};
child.__proto__ = parent;

console.log( child.foo ); // foo
delete parent.foo;
console.log( child.foo ); // foo
delete child.foo;
console.log( child.foo ); // undefined

// foo, null, undefined
// null, null, undefined
// undefined, undefined, undefined
// foo, foo, undefined  +++
// foo, foo, null


/*2. */


var parent = {
  foo: null
};

var child = {
  foo: "foo"
};

child.__proto__ = parent;

console.log( child.foo ); // foo
delete child.foo;
console.log( child.foo ); // null
delete parent.foo;
console.log( child.foo ); // undefined

// foo, foo, null
// foo, foo, undefined
// null, null, undefined
// foo, null, undefined  +++
// undefined, undefined, undefined


/*3. foo */

var foo = {
  method: function() {
    this.prop = "foo";
  }
};
var bar = {
  __proto__ : foo
};
bar.method();
console.log(bar.prop);

// foo +++
// undefined
// null
// ReferenceError
// TypeError


/*4. Foo..., bar */

var bar = {
  parent: "bar"
};
function Foo(arg) {
  this.child = arg;
}
Foo.prototype = bar;
var foo = new Foo("foo");

console.log( foo.__proto__, foo.parent );

// undefined, undefined
// undefined, bar
// Object { parent: "bar" }, bar
// ReferenceError
// window, bar
// function Foo(arg) { ... }, bar    +++
// null, bar



/*5.  undefined, bar */

var bar = {
  parent: "bar"
};
function Foo(arg) {
  this.child = arg;
}
Foo.prototype = bar;
var foo = new Foo("foo");

console.log( foo.prototype, foo.parent );

// ReferenceError
// function Foo(arg) { ... }, bar
// null, bar
// window, bar
// undefined, undefined
// undefined, bar               +++
// Object { parent: "bar" }, bar


/*6. foo, bar, TypeError */

function Foo(arg) {
  this.prop = arg;
  console.log( this.prop );
}
var bar = new Foo("foo").constructor("bar");  // .constructor links to Foo constructor function
console.log(bar.prop);

// foo, bar, bar
// foo, bar, undefined
// foo, bar, foo
// foo, foo, foo
// foo, bar, TypeError  +++ (nothing retuns after `constructor` call)
// foo, foo, bar


/*7. foo, bar, undefined */
function Foo(arg) {
  this.prop = arg;
  console.log( this.prop );
}
var bar = new (new Foo("foo")).constructor("bar");  // new Undefined
console.log(bar.prop);

// foo, bar, undefined  +++
// foo, bar, foo
// foo, bar, foo
// foo, bar, bar
// foo, foo, bar
// foo, foo, foo


/*8. */

function Foo(arg) {
  this.prop = arg;
}

var foo = new Foo("foo");
console.log(foo.__proto__); // Object
console.log(Foo.__proto__); // Object
console.log(foo.prototype); // Object
console.log(Foo.prototype); // Object

// Object, Object, undefined, Object
// undefined, function, function, Object
// Object, function, undefined, undefined
// Object, Object, Object, Object              +++
// undefined, function, function, function
// Object, function, undefined, Object


/*9.*/
function Foo() {}
Foo.prototype = {prop: "foo"};
var foo = new Foo();
Foo.prototype = { };
console.log( foo.prop );

// foo  
// null
// ReferenceError
// TypeError
// Object
// undefined  +++ (prototype has been already changed)


/*10.*/
function Foo() {}
Foo.prototype = {prop: "foo"};
var foo = new Foo();
Foo.prototype.prop = "bar";
console.log( foo.prop );

// TypeError
// Object
// ReferenceError
// foo
// undefined
// bar           +++ (evil patching)
// null


/*11.*/
function Foo() {}
Foo.prototype = {prop: "foo"};
var foo = new Foo();
delete foo.prop;
console.log( foo.prop );

// Object
// foo                +++
// ReferenceError
// undefined
// null
// TypeError


/*12. */
function Foo() {}
Foo.prototype = {prop: "foo"};
var foo = new Foo("foo");
delete Foo.__proto__.prop;
console.log( foo.prop );

// Object
// null
// ReferenceError
// undefined          +++
// TypeError
// foo


/*13.*/
function Foo(arg) {
  this.prop = arg;
}
Foo.prototype.show = function() {
  console.log("Foo: " + this.prop);
};
function Bar(arg) {
  this.prop = arg;
}
Bar.prototype = Foo.prototype;
Bar.prototype.show = function() {
  console.log("Bar: " + this.prop);
};

var foo = new Foo("foo");
foo.show();

// TypeError
// Bar: undefined
// Bar: foo              +++ (`show` was mutated)
// Foo: undefined
// ReferenceError
// Foo: foo


/*14.*/
function Foo() {}
function Bar() {}
Bar.prototype = Object.create(Foo.prototype);
var bar = new Bar();
console.log( bar.constructor );
  
// ReferenceError
// function() { }
// function Bar() { }
// Object
// function Foo() { }   +++
// TypeError
// null


/*15. */

function Foo() {}
function Bar() {}
Bar.prototype = Object.create(Foo.prototype);
var bar = new Bar();
console.log( bar instanceof Bar );    // true
console.log( bar instanceof Foo );    // true
console.log( bar instanceof Object ); // true

// true, true, true   +++
// true, false, true
// true, true, false
// true, false, false
// false, false, false