const digitize = (num) => _(String(num))
  .toArray()
  .map(Number)
  .value()


export default digitize