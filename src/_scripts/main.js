// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import _ from 'lodash';

import Chapter1 from '../_modules/chapter1/chapter1.js'
import Racoon from '../_modules/racoon/racoon.js'


$(() => {

  Chapter1()

  Racoon()

});
