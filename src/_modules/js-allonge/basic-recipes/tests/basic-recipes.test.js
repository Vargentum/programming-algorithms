'use strict';

import BasicRecipes from '../basic-recipes';

describe('BasicRecipes View', function() {

  beforeEach(() => {
    this.basicRecipes = new BasicRecipes();
  });

  it('Should run a few assertions', () => {
    expect(this.basicRecipes).toBeDefined();
  });

});
