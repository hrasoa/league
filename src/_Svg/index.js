// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  className: ?string,
  children: Node,
  height: ?number,
  viewBox: ?string,
  width: ?number,
}

const Svg = (props: Props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  />
);

Svg.defaultProps = {
  className: null,
  height: null,
  viewBox: null,
  width: null,
};

export default Svg;
