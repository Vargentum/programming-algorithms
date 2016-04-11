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


    describe(`rightVariadic`, () => {
      const firstAndRestES6 = (first, ...rest) => [first, rest] //es6
      const firstAndRest = rightVariadic((first, rest) => [first, rest])

      it(`Should allow to spreaded argumenst inside function`, () => {
        expect(
          firstAndRestES6('Right', 'variadic', 'example', 'arguments')
        ).toEqual(["Right", ["variadic","example","arguments"]]);
        expect(
          firstAndRest('Right', 'variadic', 'example', 'arguments')
        ).toEqual(["Right", ["variadic","example","arguments"]]);
      });
    });

    describe(`leftVariadic`, () => {
      const restAndLast = leftVariadic((rest, last) => [rest, last]);

      it(`Should allow to spreaded argumenst inside function`, () => {
        expect(
          restAndLast('Left', 'variadic', 'example', 'arguments')
        ).toEqual([["Left","variadic","example"], "arguments"]);
      });
    });


  });

  // describe(``, () => {
  //   it(`Should `, () => {
  //     expect().toEqual();
  //   });
  // });

});
