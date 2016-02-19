'use strict';

import _ from 'lodash'


export default (function () {
  
  const operatorsMap = {
    plus: (o1, o2) => o1 + o2,
    minus: (o1, o2) => o1 - o2,
    times: (o1, o2) => o1 * o2,
    dividedBy: (o1, o2) => o1 / o2,
  }
  const operandsMap = {
    zero:  0,
    one:   1,
    two:   2,
    three: 3, 
    four:  4,
    five:  5,
    six:   6,
    seven: 7, 
    eight: 8,
    nine:  9
  }

  const operandFactory = o1 => fn => {
    if (fn) {
      let {operator, o2} = fn
      return operator(o1, o2)
    }
    return o1
  }

  const operatorFactory = operator => o2 => ({operator, o2})

  const Operands = _.mapValues(operandsMap, val => operandFactory(val))
  const Operators = _.mapValues(operatorsMap, val => operatorFactory(val))
  return {Operands, Operators}

}())