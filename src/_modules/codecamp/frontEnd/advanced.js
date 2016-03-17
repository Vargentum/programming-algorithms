'use strict';


export default (() => {
  const telephoneCheck = function telephoneChck(str) {
    const validUSNumPtrn = /^1?\s?((\(\d{3}\))|(\d{3}))\s?\-?\d{3}(\s|\-)?\d{4}$/
    return validUSNumPtrn.test(str)
  }


  return {
    telephoneCheck
  }
})()