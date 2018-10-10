// @flow
import React from 'react';
import type { Node } from 'react';
import classname from 'classnames';
import Wrapper from '../_Wrapper';
import styles from './Content.scss';

type Props = {
  lift: boolean,
  children: Node,
};

const Content = ({ lift, children }: Props) => (
  <Wrapper className={classname(styles.root, { [styles.lift]: lift })}>
    {children}
  </Wrapper>
);

Content.defaultProps = {
  lift: false,
};

export default Content;
