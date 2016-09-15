/* -----------------------------
  Equality checker: compare any types include nested objects or arrays
----------------------------- */

const PRIMITIVE_TYPES = [Number, Boolean, NaN, null, undefined, String, Symbol]

const isPrimitive = (src) => PRIMITIVE_TYPES.some(type => 
  typeof type === 'function'
    ? typeof src === type.name.toLowerCase()
    : Object.is(src, type)
)
const isObjectOf = (type) => (o) => typeof o === type
const isEqualType = (o1, o2) => Object.is(typeof o1, typeof o2)

function isEqual(o1, o2) {
  if (!isEqualType(o1, o2)) return false
  if (isPrimitive(o1)) return Object.is(o1, o2)
  if (isObjectOf('function')(o1)) return Object.is(o1.toString(), o2.toString()) 
  // object or array
  return Object.keys(o1).every(key => isEqual(o1[key], o2[key]))
}


describe(`module`, () => {
  const primitives = [5, NaN, false, true, 'string', null, undefined, Symbol('some symbol')]
  const objects = [{}, [], function() {}]

  describe(`utils`, () => {
    describe(`isPrimitive`, () => {
      const objects = [{}, [], function() {}]
      it(`should return true if values is Primitive type`, () => {
        primitives.forEach(p => expect(isPrimitive(p)).toBe(true))
      })
      it(`should return false if values is Object type`, () => {
        objects.forEach(p => expect(isPrimitive(p)).toBe(false))
      })
    })
    describe(`isObjectOf`, () => {
      it(`should work with objects`, () => {
        objects.forEach(o => expect(isObjectOf(typeof o)(o)).toBe(true))
      })
    })
    describe(`isEqualType`, () => {
      it(`should check equal type of objects`, () => {
        primitives.forEach(p => expect(isEqualType(p,p)).toBe(true))
      })
    })
  })

  describe(`isEqual`, () => {
    function testComapre(array) {
      expect(isEqual(array, array.slice())).toBe(true)
      expect(isEqual(array, array.slice(1))).toBe(false)
    }
    it(`should compare equality for primitives`, () => {
      testComapre(primitives)
    })
    it(`should compare Functions equality`, () => {
      testComapre([Array.prototype.slice, () => {}, Object.prototype.toString])
    });
    it(`should compare Functions equality`, () => {
      testComapre([{foo: 'bar', primitives, objects}])
    });
  })
})
