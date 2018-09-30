// @flow
const classname = (...className: Array<?string>): string => [...className]
  .filter(name => typeof name === 'string')
  .join(' ')
  .trim();

export default classname;
