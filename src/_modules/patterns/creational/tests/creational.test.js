'use strict';

import AbstractFactory from '../AbstractFactory';

describe('Abstract Factory Example', function() {
  let {courtSession1, courtSession2} = AbstractFactory

  describe('courtSession1', () => {
    it('Should propose KingJoffry to make judgment', () => {
      expect(
        courtSession1.complaintPresented({severity: 12})
      ).toBe('KingJoffry judges...')
    })
    it('Should propose LordTywin to make judgment', () => {
      expect(
        courtSession1.complaintPresented({severity: 8})
      ).toBe('LordTywin judges...')
    })
  })
  
  describe('courtSession2', () => {
    it('Should propose KingAerys to make judgment', () => {
      expect(
        courtSession2.complaintPresented({severity: 12})
      ).toBe('KingAerys judges...')
    })
    it('Should propose LordConnington to make judgment', () => {
      expect(
        courtSession2.complaintPresented({severity: 8})
      ).toBe('LordConnington judges...')
    })
  })
  
});
