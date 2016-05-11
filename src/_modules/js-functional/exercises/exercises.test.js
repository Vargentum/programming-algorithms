import insertDash from './insertDash'


describe('insertDash', function() {

  it('Should output string type', () => {
    expect(insertDash(123)).toEqual(jasmine.any(String));
  });
  it('Should insert dashes between odd integers in number', () => {
    expect(insertDash(1234)).toEqual('1234');
    expect(insertDash(54310912)).toEqual('543-109-12');
  });

});
