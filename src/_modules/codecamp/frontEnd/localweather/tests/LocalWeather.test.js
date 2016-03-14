'use strict';

import LocalWeather from '../localweather';

describe('LocalWeather View', function() {

  beforeEach(() => {
    this.LocalWeather = new LocalWeather();
  });

  it('Should run a few assertions', () => {
    expect(this.LocalWeather).toBeDefined();
  });

});
