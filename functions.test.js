import {
  lengthString,
  reverseString,
  Calculator,
  capitalize
} from './functions.js';

describe('Strings Test', () => {
  test('string hammas length is 6', () => {
    expect(lengthString('hammas')).toBe(6);
  });

  test('reverse of string steve should be evets', () => {
    expect(reverseString('steve')).toBe('evets')
  })

})

describe('Calculator Functions', () => {
  test('2+3 should return 5', () => {
      expect(Calculator.add(2, 3)).toEqual(5)
    }), 
    test('4+3 should return 7', () => {
      expect(Calculator.add(4, 3)).toEqual(7)
    }), 
    test('2+6 should return 8', () => {
      expect(Calculator.add(2, 6)).toEqual(8)
    }),
    test('5-9 should return -4', () => {
      expect(Calculator.subtract(5, 9)).toEqual(-4)
    }),
    test('9-3 should return 6',()=>{
      expect(Calculator.subtract(9, 3)).toEqual(6)
    }),
    test('13-3 should return 10',()=>{
      expect(Calculator.subtract(13, 3)).toEqual(10)
    })
    test('3x3 should return 9', () => {
      expect(Calculator.multiply(3, 3)).toEqual(9)
    }),
    test('3x5 should return 15',()=>{
      expect(Calculator.multiply(3, 5)).toEqual(15)
    }),
    test('5x6 should return 30',()=>{
      expect(Calculator.multiply(5, 6)).toEqual(30)
    })
    test('15/3 should return 5', () => {
      expect(Calculator.divide(15, 3)).toEqual(5)
    }),
    test('16/4 should return 4',()=>{
      expect(Calculator.divide(16, 4)).toEqual(4)
    }),
    test('36/6 should return 6',()=>{
      expect(Calculator.divide(36, 6)).toEqual(6)
    })
})

describe('String Manipulation',()=>{
  test('ali should be returned as Ali',()=>{
    expect(capitalize('ali')).toBe('Ali')
  }),
  test('hammas should be returned as Hammas',()=>{
    expect(capitalize('hammas')).toBe('Hammas')
  })
})