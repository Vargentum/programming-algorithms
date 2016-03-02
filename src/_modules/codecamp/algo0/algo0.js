'use strict';

export default function Algo0 () {

  let factorialize = function factorialize (num) {
    if (!num) return 1
    else return num * factorialize(num - 1)
  }


  return {factorialize}

}
