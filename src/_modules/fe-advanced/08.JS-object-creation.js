/*1. Выберите НЕ корректные варианты создания объекта?*/

// var o7 = { Object : function create() { } }; +++ key should be a string
// var o3 = new { };                            +++ no `new` with literal
// var o1 = new Object();
// var o6 = { };
// var o2 = new Object;
// var o5 = Object.create(null);
// var o4 = new (Object.create());              +++ error without first arg


/*2. */

var foo = { };
foo.prop1 = undefined; // LTR assignment
foo.prop2;  /// RTL (no assignment)

console.log( "prop1" in foo );  // true
console.log( "prop2" in foo );  // false
console.log( foo.prop1 === undefined ); // true
console.log( foo.prop2 === undefined ); // true

// false, false, true, true
// false, false, true, false
// true, false, true, false
// true, true, true, true
// true, false, true, true    +++
// ReferenceError


/*3. */
var foo = { };
foo.long_property = "fooo";
var key = 'long_property';
console.log( foo[key], foo.key ); // fooo undefined

// ReferenceError
// fooo, fooo
// TypeError
// undefined, undefined
// undefined, fooo
// fooo, undefined   +++



/*4. */

var obj = {
  a: undefined,
  b: null,
  c: false,
  d: function method() { }
};
var props1 = [];
for (var prop in obj) {
  props1.push( prop );
}
var props2 = Object.keys(obj);
var props3 = Object.getOwnPropertyNames(obj);
console.log(props1, props2, props3);

// "[d], [d], [d]"
// "[a, b, c, d], [a, b, c], [d]"
// "[a, b, c], [a, b, c], [a, b, c]"
// "[b, c, d], [b, c, d], [b, c, d]"
// "[b, c, d], [b, c, d], [b, c, d]"
// "[a, b, c, d], [a, b, c, d], [a, b, c, d]"   +++
// "[a, b, c, d], [d], [a, b, c]"



/*5. */

function Foo(){
  this.a = undefined;
  this.b = null;
  this.c = false;
  this.d = function child() { }
}

Foo.prototype = {
  a: undefined,
  b: true,
  c: true,
  d: true,
  e: true,
  f: function parent() { }
};

var foo = new Foo();
var props1 = [];
for (var prop in foo) {
  props1.push( prop ); // abcdef
}
var props2 = Object.keys(foo); // abcd (non-inherited)
var props3 = Object.getOwnPropertyNames(foo); // abcd (non-inherited)
console.log(props1, props2, props3);

// "[a, b, c, d, e, f], [a, b, c, d, e, f], [a, b, c, d, e, f]"
// "[a, b, c, d], [a, b, c, d], [a, b, c, d, e, f]"
// "[a, b, c, d, e, f], [a, b, c, d], [a, b, c, d, e, f]"
// "[a, b, c, d], [a, b, c, d, e, f], [a, b, c, d, e, f]"
// "[a, b, c, d], [a, b, c, d, e, f], [a, b, c, d]"
// "[a, b, c, d, e, f], [a, b, c, d, e, f], [a, b, c, d]"
// "[a, b, c, d, e, f], [a, b, c, d], [a, b, c, d]"               +++


/*6. get prop() {...}

В каком случае для объекта корректно устанавливаются “геттер” и “сеттер”?*/

var foo = {
  _prop: ""foo"",
  prop: function get() { return _prop; },
  prop: function set(value) { _prop = value; }
};
// "var foo = { _prop: ""foo"", prop: get() { return _prop; }, prop: set(value) { _prop = value; } };"
// "var foo = { _prop: ""foo"", get prop() { return _prop; }, set prop(value) { _prop = value; } };"
// "var foo = { _prop: ""foo"", get: prop() { return _prop; }, set: prop(value) { _prop = value; } };"
// "var foo = { _prop: ""foo"", get: function() { return _prop; }, set: function(value) { _prop = value; } };"


/*7. */

var foo = { };
Object.defineProperty(foo, "a", {
  value: 100,
  writable: true,
  enumerable: false,
  configurable: true
});
var props1 = [];
for (var prop in foo) {
  props1.push( prop ); // enumerables only
}
var props2 = Object.keys(foo); // enumerables only
var props3 = Object.getOwnPropertyNames(foo); // all
console.log(props1, props2, props3);

// [], [a], [a]
// [a], [], []
// [], [], [a]    +++
// [a], [a], [a]
// [], [a], [a]
// [a], [], [a]


/*8.*/

var foo = { };
Object.defineProperty(foo, "a", {
  value: 100,
  writable: false,
  enumerable: false,
  configurable: true
});
foo.a = 10;
console.log(foo.a);

// TypeError
// undefined
// 100          +++ (non-strict silently stay unchanged)
// null
// 10


/*9. */
var foo = Object.seal(
  Object.create(
    Object.freeze({x: 1}),
    {
      y: {
        value: 2,
        writable: false,
        enumerable: false,
        configurable: false
      }
    }
  )
);
console.log(foo.x + foo.y); // 3 (x from prototype) (y from object), Sealed and Freezed objects allows to read

// Sealed -> Created {y} + {x} from prototoype (freezed)

// 3   +++
// TypeError
// ReferenceError
// NaN
// 1
// undefined
// 2



/*10. Выберите НЕ корректные варианты создания массива? */

var a2 = new [];                // +
var a4 = Array.new();           // +
var a5 = new Array();
var a1 = new ['a', 'b', 'c'];  // +
var a8 = new Array(10, 20, 30);
var a3 = new Array([1, 2, 3]); // +
var a7 = new Array(100);
var a6 = (Array.new)();       // +


/*11. */

var index = 100;
var array = [1, index, 1 + index, (function(){ return index / 10 }())];
console.log(array); // [1, 100, 101, 10]

// [1, undefined, undefined, undefined]
// [1, 100, 1, undefined]
// [1, 100, 1, 100]
// ReferenceError
// [1, 100, undefined, undefined]
// [1, 100, 101, 10]                  +++
// [1, 100, 1, 10]
// SyntaxError


/*12. */
var array = [ , , 1, ];
console.log(array.length);

// SyntaxError
// 1
// 4                 +++ (sparsed array length)
// undefined
// 3
// 2


/*13. */

var array = [ , undefined, , ];
console.log(array.length);

// SyntaxError
// 3
// 0
// 4    +++ (sparsed array)
// 1
// undefined



/*14. */

var array = [];
array[0] = 1;
array[777] = undefined;
array[3] = 30;
console.log(array.length);

// ReferenceError
// 3
// SyntaxError
// 778                        +++
// 0
// 777


/*15. */
var array = [1, 2, 3, 4, 5];
array.length = 3;     //writable truncates the array length
console.log( array );

// TypeErrorError
// [1, 2, 3]   +++
// [1, 2]
// [1, 2, 3, undefined, undefined]
// ReferenceError
// [1, 2, 3, 4, 5]


/*16. */
var array = new Array(10);
console.log( array[5] );

// TypeError
// 0
// ReferenceError
// null
// undefined    +++ (array filled of undefined values created)
// 5
// 10


/*17. */

var a1 = ["foo", "foo1", "foo2"];
var a2 = a1;
a2[0] = "bar";

console.log( a1[0], a2[0] );

// foo, bar
// bar, foo
// ReferenceError
// foo, foo
// undefined, bar
// bar, bar          +++ (access by reference)


/*18.*/

var a = [1, 2, 3, 4, 5];
console.log( (["foo", "bar", "baz", "qux"])[a[2]] );  // a[3] ==> qux

// ReferenceError
// TypeError
// bar
// baz
// qux            +++
// undefined