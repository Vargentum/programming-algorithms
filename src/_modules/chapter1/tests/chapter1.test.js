'use strict';

import Chapter1 from '../chapter1';

describe('Chapter1 View', function() {

  beforeEach(() => {
    this.Chapter1 = new Chapter1();
  });

  it('Should run a few assertions', () => {
    expect(this.Chapter1).toBeDefined();
  });

});
