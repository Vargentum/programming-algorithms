'use strict';

import _ from 'lodash'
import URI from 'URIjs'
import $ from 'jquery'

const API_KEY = "0aae81e9dd46c33225c6f6e7ff21e9bb"
const API_BASE_URL = "://api.openweathermap.org/data/2.5/weather"

export default function WeatherWidget(elem, {coords}) {

  function buildURI (config) {
    let defaults = {
      lat: coords.latitude,
      lon: coords.longitude,
      appid: API_KEY
    }
    return _(Object.assign(defaults, config))
      .transform((uri, value, key) => {
      uri.addSearch(key, value)
      return uri
    }, URI(API_BASE_URL))
  }
     
  function renderView ({coord, weather, main: {temp, temp_min, temp_max}}) {
    let {id, main, description, icon} = weather.length && weather[0]
    let markup = `
      <div class="weather-widget" id="${id}">
        <div class="weather-icon ${icon}"></div>
        <div class="weather-layout-main">
          <p class="weather-temperature">${temp}</p>
          <p class="weather-description">${description}</p>
          <p class="weather-t-range">min: ${temp_min}, max: ${temp_max}</p>
          <div class="weather-t-toggler">
            <button class="weather-t-toggler-unit metric">C</button>
            <button class="weather-t-toggler-unit imperial">F</button>
          </div>
        </div>
      </div>
    `
    $(elem)
      .html(markup)
      .find('.weather-t-toggler-unit.metric')
      .on('click', updateViewUnits('metric'))
      .end()
      .find('.weather-t-toggler-unit.imperial')
      .on('click', updateViewUnits('imperial'))
  } 
  
  function updateView(url) {
    $.getJSON(url, {}, (data) => {
      renderView(data)
    })
    console.log(url)
  } 

  function updateViewUnits (type){
    return _.partial(updateView, buildURI({units: type}))
  } 
  
  updateViewUnits('metric')()
}