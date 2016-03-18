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

  const checkCashRegister = function checkCashRegister(price, cash, CID) {
    const dignity = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      ONE: 1,
      FIVE: 5,
      TEN: 10,
      TWENTY: 20,
      'ONE HUNDRED': 100 
    }
    let rest = cash - price
    let sortedByDignitiesCID = CID.sort(([n1], [n2]) => dignity[n2] - dignity[n1])
    let restCID = sortedByDignitiesCID
      .reduce((cid, [name, amount]) => {
        let coin = [name, 0]
        let coinDignity = dignity[name]
        while (amount && rest >= coinDignity) {
          rest = Math.round(rest - coinDignity)
          amount = Math.round(rest - coinDignity)
          coin[1] += coinDignity 
        }
        return coin[1] ? cid.concat([coin]) : cid
      }, [])
    let availableCash = CID.reduce((cash, [name, amount]) => {
      return cash += amount
    }, 0)
    debugger

    switch (true) {
      case availableCash === cash - price: return 'Closed'
      case availableCash < cash - price: return 'Insufficied funds'
      default: return restCID
    }
  }

  return {
    telephoneCheck
    ,sym
    ,checkCashRegister
  }
})()