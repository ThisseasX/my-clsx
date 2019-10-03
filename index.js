const {
  flow,
  map,
  filter,
  isArray,
  join,
  trim,
  isObject,
  keys,
  isString,
  compact,
} = require('lodash/fp');

const clean = item =>
  isArray(item)
    ? flow(
        map(clean),
        compact,
        join(' '),
      )(item)
    : isObject(item)
    ? flow(
        keys,
        filter(key => item[key]),
        join(' '),
      )(item)
    : isString(item)
    ? trim(item)
    : item;

const clsx = (...classNames) =>
  flow(
    compact,
    map(clean),
    compact,
    join(' '),
  )(classNames);

module.exports = clsx;
