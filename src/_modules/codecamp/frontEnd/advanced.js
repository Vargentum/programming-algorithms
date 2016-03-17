'use strict';

export default (() => {
  
  const telephoneCheck = function telephoneChck(str) {
    const validUSNumPtrn = /^1?\s?((\(\d{3}\))|(\d{3}))\s?\-?\d{3}(\s|\-)?\d{4}$/
    return validUSNumPtrn.test(str)
  }

  const sym = function sym(...arrs) {
    let rmRepeated = (a) => a.reduce((p,n) => {
      return p.indexOf(n) === -1 ? p.concat([n]) : p
    },[])
    let getSym = (a,b) => {
      return [].concat(
        a.filter(x => b.indexOf(x) === -1),
        b.filter(x => a.indexOf(x) === -1)
      )
    }
    return arrs
      .reduce((p,n) => getSym(p, rmRepeated(n)), [])
      .sort((a,b) => a - b)
  } 

  return {
    telephoneCheck
    ,sym
  }
})()