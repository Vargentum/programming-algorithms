'use strict';

import {
     callFirst
    ,callLast
    ,unary
    ,tap
    ,thru
    ,maybe
    ,once
    ,rightVariadic
    ,leftVariadic
    ,leftGather
    ,recurCompose
    ,reduceCompose
    ,pipeline
     
  } from '../basic-recipes';


describe('BasicRecipes View', function() {

  describe(`Decorators`, () => {
    let sum = (a, b) => a + b
    let divide = (a, b) => a / b
  
    describe(`callFirst decorator`, () => {
      let addTo5 = callFirst(sum, 5)
      it(`Should provide PA with first argument applied`, () => {
        expect(addTo5(5)).toBe(10);
        expect(addTo5(35)).toBe(40);
      });
    });

    describe(`callLast decorator`, () => {
      let divideBy5 = callLast(divide, 5)
      it(`Should provide PA with first argument applied`, () => {
        expect(divideBy5(25)).toBe(5);
        expect(divideBy5(500)).toBe(100);
      });
    });


    describe(`unary`, () => {
      let nums = [1.1, 2.2, 3.3]
      it(`Should ignore all argument providen to function exept first`, () => {
        expect(
          nums.map(parseInt)
        ).toEqual(
          nums.map((x, i, a) => parseInt(x,i,a))
        ); 
        expect(
          nums.map(unary(parseInt))
        ).toEqual(
          nums.map(x => parseInt(x))
        );
      });
    });


    // describe(`tap`, () => {
    //   let nums = [1,2,3]
    //   let inc = x => x+1

    //   it(`Should `, () => {
    //     expect(
    //       tap(nums, inc)
    //     ).toEqual(
    //       nums.map(inc)
    //     );
    //   });
    // });


    // describe(`thru`, () => {
    //   let nums = [1,2,3]
    //   let inc = x => x+1

    //   it(`Should pass data through provided function and return the values`, () => {
    //     expect(
    //       thru(nums, inc)
    //     ).toEqual(
    //       nums.map(inc)
    //     );
    //   });
    // });


    describe(`maybe`, () => {
      it(`Should execute function only if all given params isn't null or undefined`, () => {
        expect(maybe(sum)(5,10)).toEqual(15);
        expect(maybe(sum)(5,null)).not.toBeDefined();
        expect(sum(5,null)).toEqual(5 + null);
      });
    });


    describe(`once`, () => {
      let onceGreet = once(() => 'Hello')
      it(`Should execute function only once. For other calls returns undefined`, () => {
        expect(onceGreet()).toEqual('Hello');
        expect(onceGreet()).not.toBeDefined();
      });
    });


    describe(`Right Variadic function`, () => {
      const firstAndRestES6 = (first, ...rest) => [first, rest] //es6
      const firstAndRest = rightVariadic((first, rest) => [first, rest])

      it(`Should allow union variadic arguments in Last provided argument`, () => {
        expect(
          firstAndRestES6('Right', 'variadic', 'example', 'arguments')
        ).toEqual(["Right", ["variadic","example","arguments"]]);
        expect(
          firstAndRest('Right', 'variadic', 'example', 'arguments')
        ).toEqual(["Right", ["variadic","example","arguments"]]);
      });
    });

    describe(`Left Variadic function`, () => {
      const restAndLast = leftVariadic((rest, last) => [rest, last]);

      it(`Should allow union variadic arguments in First provided argument`, () => {
        expect(
          restAndLast('Left', 'variadic', 'example', 'arguments')
        ).toEqual([["Left","variadic","example"], "arguments"]);
      });
    });


    describe(`Left variadic destructing`, () => {
      const [variadic, left] = leftGather(2)(['Left', 'variadic', 'example', 'arguments'])

      it(`Should allow union variadic arguments in destructiring syntax`, () => {
        expect(variadic).toEqual(["Left","variadic","example"]);
        expect(left).toEqual("arguments");
      });
    });


  describe(`Variadic Compose & Pipeline`, () => {
    const inc = x => x + 1
    const double = x => x * 2
    const triple = x => x * 3
    const commonCompose = inc(double(triple(10)))
    const commonPipeline = triple(double(inc(10)))

    it(`Should compose variadic number of function toghether`, () => {
      expect(commonCompose).toEqual(1 + 2 * 3 * 10)
      expect(recurCompose(inc, double, triple)(10)).toEqual(commonCompose);
      expect(reduceCompose(inc, double, triple)(10)).toEqual(commonCompose);
    });


    it(`Pipeline should traverse init value through functions, from Left to Right`, () => {
      expect(commonPipeline).toEqual((10 + 1) * 2 * 3)
      expect(pipeline(inc, double, triple)(10)).toEqual(commonPipeline)
    });
  });

  });


  // describe(``, () => {
  //   it(`Should `, () => {
  //     expect().toEqual();
  //   });
  // });

});
