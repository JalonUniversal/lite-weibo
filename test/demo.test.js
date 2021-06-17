/**
 * @description test demo
 * @augments JalonUniversal
 */

function sum(a, b) {
  return a + b;
}

test('10 add 20 should be not qual to 30', () => {
  const res = sum(10, 20)
  expect(res).not.toBe(40)
});