'use strict';

import connectFour from '../ConnectFour';

describe('connectFour game', function() {

  it('Should be defined', () => {
    expect(connectFour).toBeDefined();
  });


  // describe('Win', () => {
  //   let board1 = [['-','-','-','-','-','-','-'],
  //                 ['-','-','-','-','-','-','-'],
  //                 ['-','-','-','R','R','R','R'],
  //                 ['-','-','-','Y','Y','R','Y'],
  //                 ['-','-','-','Y','R','Y','Y'],
  //                 ['-','-','Y','Y','R','R','R']];

  //   let board2 = [['-','-','-','-','-','-','-'],
  //                 ['-','-','-','-','-','-','-'],
  //                 ['-','-','-','R','R','R','Y'],
  //                 ['-','-','-','Y','R','Y','Y'],
  //                 ['-','-','-','-','Y','Y','Y'],
  //                 ['-','-','Y','Y','R','R','R']];

  //   let board3 = [['-','-','-','-','-','-','-'],
  //                 ['-','-','-','-','-','-','-'],
  //                 ['-','-','-','Y','R','R','Y'],
  //                 ['-','-','-','Y','R','Y','Y'],
  //                 ['-','-','-','Y','R','Y','Y'],
  //                 ['-','-','Y','Y','Y','R','R']];

  //   let board4 = [['Y','R','Y','R','Y','R','Y'],
  //                 ['R','Y','R','Y','Y','R','Y'],
  //                 ['Y','Y','R','R','Y','Y','R'],
  //                 ['R','R','Y','Y','Y','Y','Y'],
  //                 ['Y','Y','Y','R','Y','R','Y'],
  //                 ['R','Y','R','R','R','Y','R']]


  //   it('Should detect horisontal win combination', () => {
  //     expect(connectFour(board1)).toBe('R')
  //   });
  //   it('Should detect diagonal win combination', () => {
  //     expect(connectFour(board2)).toBe('Y')
  //   });
  //   it('Should detect vertical win combination', () => {
  //     expect(connectFour(board3)).toBe('Y')
  //   });
  //   it('Should detect vertical win combination', () => {
  //     expect(connectFour(board4)).toBe('Y')
  //   });
  // })

  describe('Other cases', () => {
    let draw1 = [['Y','R','Y','R','Y','R','Y'],
                 ['R','Y','R','R','Y','R','Y'],
                 ['Y','Y','R','R','R','Y','R'],
                 ['R','R','Y','Y','Y','R','Y'],
                 ['Y','Y','Y','R','Y','R','Y'],
                 ['R','Y','R','R','R','Y','R']]

    let progress1 = [['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','R','Y'],
                  ['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-']];

    it('Should detect draw, if all spaces was filled', () => {
      expect(connectFour(draw1)).toBe('draw')
    });
    // it('Should detect diagonal win combination', () => {
    //   expect(connectFour(progress1)).toBe('in progress')
    // });
  })
});
