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
  ['foo bar baz', 'foo', true && 'bar', 'baz'],
  ['foo baz', { foo: true, bar: false, baz: true }],
  ['foo --foobar', { foo: true }, { bar: false }, null, { '--foobar': 'hello' }],
  ['foo bar', ['foo', 0, false, 'bar']],
  [
    'foo bar baz hello there',
    ['foo'],
    ['', 0, false, 'bar'],
    [['baz', [['hello'], 'there']]],
  ],
  [
    'foo bar hello world cya',
    'foo',
    [1 && 'bar', { baz: false, bat: null }, 'hello', 'world'],
    'cya',
  ],
];

module.exports = testCases;
