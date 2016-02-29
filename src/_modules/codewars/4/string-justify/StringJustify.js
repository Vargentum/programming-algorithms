'use strict';

import _ from 'lodash'


export default function StringJustify (str, len) {

  let breaker = (words, limit) => {
    let characters = 0
    let index = 0
    let wordsCount = 0
    let lines = [[]]
    
    words.forEach(word => {
      counter += word.length - 1
      wordsCount++
      if (counter <= limit - (wordsCount - 1)) {
        lines[index].push(word)
      }
      else {
        counter = 0
        wordsCount = 0
        index++
        lines[index] = []
      }
    })
    return lines
  }

  let justifier = (lines) => {
    let addSpaces = (line) => line.map(word => word += ' ')
    let countLength = (line) => line.reduce((str, word) => str += word,'').trim().length
    
    lines.map(line => {
      while (countLength(line) - 1 < limit) {
        line = addSpaces(line)
      }
      return line
    })

    return lines
  }

  let joiner = (lines) => lines.reduce((p, n) => p += n.join('') + '/n' ,'')

  return joiner(justifier(breaker(str, len)))
}
