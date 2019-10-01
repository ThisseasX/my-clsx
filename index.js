const clean = x =>
  Array.isArray(x)
    ? x
        .map(x => clean(x))
        .filter(x => x)
        .join(' ')
    : typeof x === 'object'
    ? Object.keys(x)
        .filter(key => x[key])
        .join(' ')
    : typeof x === 'string'
    ? x.trim()
    : x;

const clsx = (...classNames) =>
  classNames.filter(x => x).length
    ? classNames
        .filter(x => x)
        .map(x => clean(x))
        .filter(x => x)
        .join(' ')
    : '';

module.exports = clsx;
