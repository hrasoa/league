// @flow
import React from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import Wrapper from '../_Wrapper';
import styles from './Content.scss';

type Props = {
  lift: boolean,
  children: Node,
};

const Content = ({ lift, children }: Props) => (
  <Wrapper className={classnames(styles.root, { [styles.lift]: lift })}>
    {children}
  </Wrapper>
);

Content.defaultProps = {
  lift: false,
};

export default Content;
