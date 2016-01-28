'use strict';

import _ from 'lodash'

export default function Racoon () {

  const doubleNum = function(num) {
    let int = Math.floor(parseFloat(num))
    
    let isDouble = i => {
      let str = `${i}`
      let mdl = Math.floor(str.length / 2)
      let [s1, s2] = [str.slice(0, mdl), str.slice(mdl)]
      return s1 === s2
    }

    return isDouble(int) ? int : int * 2
  }

  return {
    doubleNum: doubleNum
  }
}

