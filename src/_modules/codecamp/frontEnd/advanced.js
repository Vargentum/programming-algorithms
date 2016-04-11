import roundTo from "round-to"

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
    const restCID = sortedByDignitiesCID
      .reduce((cid, [name, amount]) => {
        let coin = [name, 0]
        let coinDignity = dignity[name]
        while (amount && rest >= coinDignity) {
          rest = roundTo(rest - coinDignity, 3)
          amount = roundTo(amount - coinDignity, 3)
          coin[1] += coinDignity 
        }
        return coin[1] ? cid.concat([coin]) : cid
      }, [])

    const cidToInt = (cid) => {
      return roundTo(cid.reduce((cash, [name, amount]) => {
        return cash += amount
      }, 0), 3)
    }

    const availableCash = cidToInt(CID)
    const restCash = cidToInt(restCID)

    switch (true) {
      case availableCash === cash - price: return 'Closed'
      case restCash !== cash - price: return 'Insufficient Funds'
      default: return restCID
    }
  }


  const updateInventory = function updateInventory(old = [], fresh = []) {
    const updateInventoryKeys = (arr) => arr.reduce((p, [q, n]) => {
      p[n] ? p[n] += q : p[n] = q
      return p
    }, {})
    const sortAndConvertToProperFormat = (hash) => Object.keys(hash)
      .reduce((p, n) => p.concat([[hash[n], n]]), [])
      .sort(([q1, n1], [q2, n2]) => n1 < n2 ? -1 : 1)

    return sortAndConvertToProperFormat(
      updateInventoryKeys(old.concat(fresh))
    )
  }


  const permAlone = function permAlone(str) {
    const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1)
    const removeDuplicated = (str) => str.split('').reduce((p,n) => {
      return p.indexOf(n) === -1 ? p.concat([n]) : p
    })
    const [total, requested] = [str.length, removeDuplicated(str).length]

    switch (requested) {
      case 0: return 1
      case 1: return total
      case total: return factorial(total)
      default: return factorial(total) / factorial(total - requested)
    }
  }

  return {
    telephoneCheck
    ,sym
    ,checkCashRegister
    ,updateInventory
    ,permAlone
  }
})()