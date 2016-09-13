import _ from 'lodash'
import * as m1 from './binary-tree/01.preorder-traversal.js'

describe(`Module 1. Preorder traversal`, () => {
  const value = {
    data: 10,
    left: {data: 6, left: {data: 4}, right: {data: 8}},
    right: {data: 18, left: {data: 15}, right: {data: 21}},
  } 
  const actual = m1.format(m1.preOrder(value))
  const expected = '10  6  4  8  18  15  21'

  it(`should `, () => {
    expect(actual).toEqual(expected)
  })
})