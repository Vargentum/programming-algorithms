'use strict';

import Algo0 from '../algo0';

describe('Algo0 View', function() {

  let {factorialize} = Algo0()

  it('Should run a few assertions', () => {
    expect(Algo0()).toBeDefined();
  });


  it('Should factorialize number', () => {
    expect(factorialize(0)).toBe(1)
    expect(factorialize(3)).toBe(1*2*3)
    expect(factorialize(5)).toBe(1*2*3*4*5)
  });

});
