const DAYS = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const timeParser = (time) => {
  const order = ['day', 'month', 'year']
  const data = time.split('-').map(_.unary(parseInt))
  return _.zipObject(order, data)
}

const getGoodOldDay = (time) => {
  const t = timeParser(time)
  const date = new Date()
  date.setFullYear(t.year, t.month - 1, t.day) // set any year you want
  return DAYS[date.getDay()]
}