// @flow
const classname = (...className: string[]): string => [...className]
  .filter(name => typeof name === 'string')
  .join(' ')
  .trim();

export default classname;
