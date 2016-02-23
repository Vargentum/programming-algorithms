// 'use strict';

// /*Need to
// return a value
// need to be evaluatable

// sum(1)
// sum(2)

// */


// export default (function () {
  
//   const sum = (...args) => args.reduce((p, n) => p += n, 0)

//   const partialApplication = (fn, ...startArgs) => {
//     return (...nextArgs) => {
//       return fn.apply(this, startArgs.concat(nextArgs))
//     }
//   }

//   //valueOf - returns the primitive value of the specified object

//   // const curry = (fn) => {
//   //   let cache = {}
//   //   let ns = 'test'
//   //   cache[ns] = []
//   //   let helper = (...args) => {
//   //     debugger
//   //     return cache[ns].concat(args)
//   //   }
//   //   helper.valueOf = () => {
//   //     debugger
//   //     return fn(cache[ns])
//   //   }
//   //   return helper
//   // }


//   return {
//     inc: partialApplication(sum, 1),
//     sum: function add(n) {
//             var next = add.bind(n += this | 0);
//             next.valueOf = function() { debugger; return n; };
//             return next;
//           }
//   }
// }())
