import _ from "lodash"
import {nth, comparator, executeIfHasField, complement} from '../introducing-functional-javascript';

describe('nth', () => {
  const letters = ['a','b','c']

  it('Should return item attached with index from array or string', () => {
    expect(nth(letters,1)).toBe('b')
    expect(nth(letters.join(''), 1)).toBe('b')
  });

  // it('Should fail with incorrect data', () => {
  //   // expect(nth({}, 2)).toThrow()
  //   // expect(nth(letters, -1)).toThrow()
  //   // expect(nth(letters, 55)).toThrow()
  //   // expect(nth(letters, {})).toThrow()
  // })
});


describe('comparator', () => {
  const unsortedAry = [100, 1, 0, 10, -1, -2, -1]
  const sortedAsc   = [-2, -1, -1, 0, 1, 10, 100]
  const sortedDesc  = [100, 10, 1, 0, -1, -1, -2]

  it(`Should use predicate for sorting items`, () => {
    expect(unsortedAry.sort(comparator(_.lte))).toEqual(sortedAsc) //ascending order
    expect(unsortedAry.sort(comparator(_.gte))).toEqual(sortedDesc) //descending order
  })
})


describe('executeIfHasField', () => {
  const ary = [1,2,3]
  const obj = {foo: 'bar'}

  it(`Should use predicate for sorting items`, () => {
    expect(executeIfHasField(ary, 'reverse')).toEqual(ary.reverse())
    expect(executeIfHasField(obj, 'foo')).toEqual(obj.foo)
    expect(executeIfHasField(obj, 'baz')).toBeUndefined ()
  })
})


describe('complement', () => {
  const ary = [1,2,'a','b']

  it(`Should return inverted sence of given predicate `, () => {
    expect(ary.filter(complement(_.isNumber))).toEqual(_.reject(ary, _.isNumber))
  })
})


describe('groupBy and countBy', () => {
  const albums = [{title: "Sabbath Bloody Sabbath", genre: "Metal"}, 
                  {title: "Scientist", genre: "Dub"},
                  {title: "Undertow", genre: "Metal"}];

  it(`Should return inverted sence of given predicate `, () => {
    expect(_.groupBy(albums, (x) => x.genre)).toEqual({Metal:[{title:"Sabbath Bloody Sabbath", genre:"Metal"},
                                                             {title:"Undertow", genre:"Metal"}],
                                                       Dub:  [{title:"Scientist", genre:"Dub"}]})
    expect(_.countBy(albums, (x) => x.genre)).toEqual({Metal: 2, Dub: 1})
  })
})



