const comparator = (fn) => (a,b) => fn(a,b) ? 1 : -1
const arrayIdentity = (smth) => Array.isArray(smth) ? smth : []
const sortNumbers = (ary) => arrayIdentity(ary).sort(comparator(_.gt))

export default sortNumbers