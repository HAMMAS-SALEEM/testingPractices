const sum = require('./functions.js');

test('string hammas length is 6', () => {
  expect(sum('hammas')).toBe(6);
});