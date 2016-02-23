'use strict';

import connectFour from '../ConnectFour';

describe('connectFour Function', function() {

  it('Should be defined', () => {
    expect(connectFour).toBeDefined();
  });


  describe('Win', () => {
    var board1 = [['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-'],
                  ['-','-','-','R','R','R','R'],
                  ['-','-','-','Y','Y','R','Y'],
                  ['-','-','-','Y','R','Y','Y'],
                  ['-','-','Y','Y','R','R','R']];

    var board2 = [['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-'],
                  ['-','-','-','R','R','R','Y'],
                  ['-','-','-','Y','R','Y','Y'],
                  ['-','-','-','-','Y','Y','Y'],
                  ['-','-','Y','Y','R','R','R']];

    var board3 = [['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-'],
                  ['-','-','-','Y','R','R','Y'],
                  ['-','-','-','Y','R','Y','Y'],
                  ['-','-','-','Y','R','Y','Y'],
                  ['-','-','Y','Y','Y','R','R']];

    it('Should detect horisontal win combination', () => {
      expect(connectFour(board1)).toBe('R')
    });
    it('Should detect diagonal win combination', () => {
      expect(connectFour(board2)).toBe('Y')
    });
    it('Should detect vertical win combination', () => {
      expect(connectFour(board3)).toBe('Y')
    });
  })

  describe('Other cases', () => {
    var board1 = [['R','Y','R','R','Y','R','R'],
                  ['Y','R','Y','Y','R','Y','Y'],
                  ['R','Y','R','R','Y','R','R'],
                  ['Y','R','Y','Y','R','Y','Y'],
                  ['R','Y','R','R','Y','R','R'],
                  ['Y','R','Y','Y','R','Y','Y']];

    var board2 = [['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','R','Y'],
                  ['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-']];

    it('Should detect draw, if all spaces was filled', () => {
      expect(connectFour(board1)).toBe('draw')
    });
    it('Should detect diagonal win combination', () => {
      expect(connectFour(board2)).toBe('in progress')
    });
  })
});
