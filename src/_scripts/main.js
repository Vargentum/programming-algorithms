// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';
import $ from 'jquery';
import _ from 'lodash';

// import FirstSip from '../_modules/js-allonge/unsorted/unsorted'
// import BasicRecipes from '../_modules/js-allonge/basic-recipes/basic-recipes'

import WeatherWidget from '../_modules/codecamp/frontEnd/localweather/LocalWeather.js'

$(() => {

  // FirstSip()
  // BasicRecipes()


  function getCurrentCoords(cb) {
    if (!Modernizr.geolocation) return null
    navigator.geolocation.getCurrentPosition(cb)
  }

  $(document).ready(() => {
    getCurrentCoords(({coords}) => {
      WeatherWidget( $('#weather-widget'), {
        coords: coords
      })
    })
  });


});
