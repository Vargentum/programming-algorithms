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
    const lettersAry = str.split('')
    let indexesAry = lettersAry.map((n,i) => i)
    let counter = 0
    
    const nextPermutation = (array) => {
      // Find non-increasing suffix
      var i = array.length - 1;
      while (i > 0 && array[i - 1] >= array[i])
          i--;
      if (i <= 0)
          return false;
      
      // Find successor to pivot
      var j = array.length - 1;
      while (array[j] <= array[i - 1])
          j--;
      var temp = array[i - 1];
      array[i - 1] = array[j];
      array[j] = temp;
      
      // Reverse suffix
      j = array.length - 1;
      while (i < j) {
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          i++;
          j--;
      }
      return true;
    }
    const isntConsecContains = (arr) => arr.every((x,i,a) =>  x !== a[i-1] && x !== a[i+1])
    const restoreLetters = (idxAry) => idxAry.map((n) => lettersAry[n])

    if (isntConsecContains(lettersAry)) {
      counter++
    } 
    while(nextPermutation(indexesAry)) {
      if (isntConsecContains(restoreLetters(indexesAry))) {
        counter++
      } 
    }
    return counter
  }


  const makeFriendlyDates = function makeFriendlyDates([start, end]) {
    const removeNulls = (arr) => arr.filter(x => x !== null)
    class FriendlyDateRange {
      static monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
      static ordinals = {
        1: 'st',
        2: 'nd',
        3: 'rd',
        other: 'th'
      }
      constructor(start, end) {
        this.start = {
          year: start.getFullYear(),
          month: start.getMonth(),
          date: start.getDate()
        }
        this.end = {
          year: end.getFullYear(),
          month: end.getMonth(),
          date: end.getDate()
        }
        return this.buildDateRange()
      }
      getDiff(type) {
        return this.end[type] - this.start[type]
      }

      isEndWithingYear() {
        const [yDiff, mDiff, dDiff] = [this.getDiff('year'), this.getDiff('month'), this.getDiff('date')]
        return yDiff === 0 || yDiff === 1 && mDiff < 0 || yDiff === 1 && mDiff === 0 && dDiff < 0
      }
      isEqual(datePart){
        return this.start[datePart] === this.end[datePart]
      }

      getYear(dateType) {
        return this[dateType].year
      }
      getMonth(dateType) {
        return FriendlyDateRange.monthes[this[dateType].month]
      }
      getDate(dateType) {
        const dt = this[dateType].date
        const ending = dt > 3 ? FriendlyDateRange.ordinals.other : FriendlyDateRange.ordinals[dt]
        return dt + ending
      }
      buildStartDate() {
        const [m, d, y] = [this.getMonth('start'), this.getDate('start'), this.getYear('start')]
        const currentYear = new Date(Date.now()).getFullYear()
        if (this.isEndWithingYear() && this.start.year === currentYear) {
          return `${m} ${d}`
        }
        return `${m} ${d}, ${y}`
      }
      buildEndDate() {
        const [m, d, y] = [this.getMonth('end'), this.getDate('end'), this.getYear('end')]
        if (this.isEndWithingYear()) {
          if (this.isEqual('month') && this.isEqual('year')) {
            if (this.isEqual('date')) return null
            return `${d}`
          }
          return `${m} ${d}`
        }
        return `${m} ${d}, ${y}`
      }
      buildDateRange() {
        return removeNulls([this.buildStartDate(), this.buildEndDate()])
      }
    }
    const [startDate, endDate] = [new Date(start), new Date(end)]
    return new FriendlyDateRange(startDate, endDate)
  }

  class Person {
    constructor(firstAndLast) {
      this._beat = 1
      this._silly = 2
      this._first = 3
      this._testCase = 4

      this.setFullName(firstAndLast)
    }
    getFirstName() {
      return this._firstName
    }
    getLastName() {
      return this._lastName
    }
    getFullName() {
      return this.getFirstName() + " " + this.getLastName()
    }
    setFirstName(first) {
      this._firstName = first
    }
    setLastName(last) {
      this._lastName = last
    }
    setFullName(firstAndLast) {
      const [first, last] = firstAndLast.split(' ')
      this.setFirstName(first)
      this.setLastName(last)
    }
  }


  const orbitalPeriod = function orbitalPeriod(objectsArray) {
    const EARTH = {
      radius: 6367.4447, //km
      GM: 398600.4418
    }
    const altitudeToOrbital = (alt) => {
      const semiMajorAxis = alt + EARTH.radius
      const orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / EARTH.GM)
      return Math.round(orbitalPeriod)
    }
    return objectsArray.map(({name, avgAlt}) => ({name, orbitalPeriod: altitudeToOrbital(avgAlt)}))
  }


  const pairwise = function pairwise(arr, num) {
    const disallowed = []
    const isLegalIndex = (i) => disallowed.indexOf(i) === -1
    const sum = (p,n) => p + n
    const isEq = (n1,n2) =>  n1 + n2 === num
    const getPairIdx = (n1,n2,i) => isLegalIndex(i) && isEq(n1,n2)

    const getPairs = (p,n,i,arr) => {
      const pairIdx = arr.findIndex(getPairIdx.bind(this, n)) //TODO: avoid O(n2) complexity
      if (pairIdx !== -1 && pairIdx !== i && isLegalIndex(i)) {
        disallowed.push(pairIdx, i)
        return p.concat([i, pairIdx])
      }
      return p
    }
    const pairs = arr.reduce(getPairs, [])
    return pairs.reduce(sum, 0)
  }


  // const pairwise = function pairwise(arr, num) {
  //   const sum = (p,n) => p + n
  //   const disallowedIdx = []
  //   const isEq = (n1,n2) => n1 + n2 === num

  //   const getPairs = (p,n,i,arr) => {
  //     const eqNum = arr.slice(i+1).filter(isEq.bind(this, n))[0]
  //     const eqIdx = arr.indexOf(eqNum)
  //     if (!eqNum) return p
  //     disallowedIdx.push(eqIdx)
  //     return p.concat([i, eqIdx])
  //   }
  //   const pairs = arr.reduce(getPairs, [])
  //   return pairs.reduce(sum, 0)
  // }



  return {
    telephoneCheck
    ,sym
    ,checkCashRegister
    ,updateInventory
    ,permAlone
    ,makeFriendlyDates
    ,Person
    ,orbitalPeriod
    ,pairwise
  }
})()