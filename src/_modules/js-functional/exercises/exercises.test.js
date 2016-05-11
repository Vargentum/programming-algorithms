import insertDash from './01.insertDash'
import digitize from "./02.digitize"


describe('insertDash', function() {

  it('Should output string type', () => {
    expect(insertDash(123)).toEqual(jasmine.any(String));
  });
  it('Should insert dashes between odd integers in number', () => {
    expect(insertDash(1234)).toEqual('1234');
    expect(insertDash(54310912)).toEqual('543-109-12');
  });

});


describe('digitize', function() {

  it('Should output array type', () => {
    expect(digitize(123)).toEqual(jasmine.any(Array));
  });
  it('Should insert dashes between odd integers in number', () => {
    expect(digitize(1234)).toEqual([1,2,3,4]);
    expect(digitize(54310912)).toEqual([5,4,3,1,0,9,1,2]);
  });

});
