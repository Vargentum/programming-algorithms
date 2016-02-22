'use strict';

import ChainAdding from '../ChainAdding';

describe('Sum adding function', function() {
  const {sum, inc} = ChainAdding

  it('Should exsist', () => {
    expect(sum).toBeDefined();
  });

  it('should sum arguments from multiple calls', () => {
    expect(sum(1).toBeEqual(1))
    expect(sum(1)(2).toBeEqual(1 + 2))
    expect(sum(1)(2)(3).toBeEqual(1 + 2 + 3))
  }) 

  it('A single call should return the number passed in.', () => {
    expect(sum(5).toBeEqual(5))
    expect(sum(0).toBeEqual(0))
  }) 

  it('and we should be able to store the result and reuse it.', () => {
    let addTwo = sum(2)
    expect(addTwo).toBeEqual(2)
    expect(addTwo + 5).toBeEqual(7)
    expect(addTwo(3).toBeEqual(5))
    expect(addTwo(3)(5).toBeEqual(10))
  }) 

});
