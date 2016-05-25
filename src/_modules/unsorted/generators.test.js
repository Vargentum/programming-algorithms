import {simpleGen, generateSeq, generateAlhpaNum, execute, fetchGithubUser} from "./generators"


describe('Simple generator exmample', () => {
  const [...valuesFromSpread] = simpleGen()

  it('can be iterable', () => {
    let valuesFromLoop = []
    for (let num of simpleGen()) {
      valuesFromLoop.push(num)
    }
    expect(valuesFromLoop).toEqual(valuesFromSpread)
  })

  it('can yield variables with `next` method', () => {
    let gen = simpleGen()
    expect(gen.next().value).toEqual(valuesFromSpread[0])
    expect(gen.next().value).toEqual(valuesFromSpread[1])
  })
})

describe('Generator Composition', () => {
  it('can compose generators into more powerful one with `yield*`', () => {
    expect([...generateSeq(2,6)]).toEqual([2,3,4,5,6])
    expect(String.fromCodePoint(...generateAlhpaNum())).toBe("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
  })
})


describe('Flatten Async Code flow', () => {
  console.log(execute(fetchGithubUser('Vargentum')))
})