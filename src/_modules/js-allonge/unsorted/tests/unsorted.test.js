'use strict';

import Unsorted from '../unsorted';

describe('Unsorted View', function() {

  beforeEach(() => {
    this.unsorted = new Unsorted();
  });

  it('Should run a few assertions', () => {
    expect(this.unsorted).toBeDefined();
  });

});
