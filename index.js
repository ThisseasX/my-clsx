const clsx = (...classNames) =>
  classNames.filter(x => x).length
    ? classNames
        .map(x =>
          Array.isArray(x)
            ? x
                .map(x => x.trim())
                .filter(x => x)
                .join(' ')
            : typeof x === 'object'
            ? Object.keys(x)
                .filter(key => x[key])
                .join(' ')
            : typeof x === 'string'
            ? x.trim()
            : x,
        )
        .filter(x => x)
        .join(' ')
    : '';

module.exports = clsx;
