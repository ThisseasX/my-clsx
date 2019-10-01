const testCases = [
  ['a b c', ['a', 'b', 'c']],
  ['a b c', 'a', 'b', 'c'],
  ['a b c', '   a  ', '   b     ', '  c  '],
  [
    'a b c',
    {
      a: true,
      b: true,
      c: true,
      d: false,
      e: undefined,
      f: null,
    },
  ],
];

module.exports = testCases;
