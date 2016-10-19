import reqwest from 'reqwest'
import * as m1 from './stack/01.maximum-element'

describe(`Maximum element`, () => {
  const actual = `10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3`
  const expected = `26 91`

    it(`should return max values from stack of give instructions`, () => {
    expect(m1.parseInput(actual)).toEqual(expected)
  })
})
// describe(`Maximum element`, () => {
//   it(`should return max values from stack of give instructions`, (done) => {
//     reqwest({
//       url: '//hr-testcases-us-east-1.s3.amazonaws.com/14717/input13.txt?AWSAccessKeyId=AKIAJAMR4KJHHUS76CYQ&Expires=1473955889&Signature=wIdgMjEZD8I7R2evDPq6V6X4V94%3D&response-content-type=text%2Fplain',
//       type: 'jsonp',
//       crossOrigin: true
//     }).then((val) => {
//       console.log(val, '---------')
//       done()
//     })
//     // Promise.all([
//     //   reqwest({
//     //     url: '//hr-testcases-us-east-1.s3.amazonaws.com/14717/input13.txt?AWSAccessKeyId=AKIAJAMR4KJHHUS76CYQ&Expires=1473955889&Signature=wIdgMjEZD8I7R2evDPq6V6X4V94%3D&response-content-type=text%2Fplain',
//     //     type: 'jsonp',
//     //     crossOrigin: true
//     //   })
//     //   ,reqwest({
//     //     url: '//hr-testcases-us-east-1.s3.amazonaws.com/14717/output13.txt?AWSAccessKeyId=AKIAJAMR4KJHHUS76CYQ&Expires=1473955892&Signature=qA%2Fy%2F1Ij2TH9qvaCmXkc%2FtnFRHE%3D&response-content-type=text%2Fplain',
//     //     type: 'jsonp',
//     //     crossOrigin: true
//     //   })
//     // ])
//     // .then((value) => {
//     //   console.log(value, '---------')
//     //   epxect(true).toBe(false)
//     //   // expect(m1.parseInput(actual)).toEqual(expected)
//     //   done()
//     // })    
//   })
// })

