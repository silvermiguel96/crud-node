const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(2, 2)).toBe(3);
});

test('adds 1 + 2 to diferente to  3', () => {
    expect(sum(1, 2)).not.toBe(3);
  });
