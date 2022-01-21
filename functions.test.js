import {lengthString, reverseString, Calculator} from './functions.js';

describe('Strings Test',()=>{
  test('string hammas length is 6', () => {
    expect(lengthString('hammas')).toBe(6);
  });
  
  test('reverse of string steve should be evets',()=>{
    expect(reverseString('steve')).toBe('evets')
  })
  
})

describe('Calculator Functions',()=>{
  test('2+3 should return 5',()=>{
    expect(Calculator.add(2,3)).toEqual(5)
  }),
  test('5-9 should return -4',()=>{
    expect(Calculator.subtract(5,9)).toEqual(-4)
  }),
  test('3x3 should return 9',()=>{
    expect(Calculator.multiply(3,3)).toEqual(9)
  }),
  test('15/3 should return 5',()=>{
    expect(Calculator.divide(15,3)).toEqual(5)
  })
})
