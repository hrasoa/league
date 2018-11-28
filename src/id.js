// @flow
const ID: () => string = () =>
  `_${(new Date().getTime() * Math.random()).toString(36).substr(2, 9)}`;

export default ID;
