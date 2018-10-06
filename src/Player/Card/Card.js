// @flow
import React from 'react';
import classname from 'classnames';
import LazyPicture from '../../_LazyPicture';
import withInline from '../../_Svg/_Inline/withInline';
import ClipHexagone, { id as ClipHexagoneId } from '../../_Svg/ClipHexagone';
import InnerShadow, { id as InnerShadowId } from '../../_Svg/InnerShadow';
import ClipBody, { id as ClipBodyId } from './ClipBody';
import styles from './Card.scss';
import image from './card.png';

const Card = () => (
  <div className={styles.root}>
    <div className={styles.shadow}>
      <div className={styles.body}>
        <LazyPicture
          alt="player"
          className={styles.image}
          preClassName={classname(styles.image, styles.pre)}
          image={{ preSrc: image, src: image }}
        />
      </div>
    </div>
  </div>
);

export default withInline({
  [ClipBodyId]: ClipBody,
  [ClipHexagoneId]: ClipHexagone,
  [InnerShadowId]: InnerShadow,
})(Card);
