// @flow
import React from 'react';
import LazyPicture from '../../_LazyPicture';
import withInline from '../../_Svg/_Inline/withInline';
import ClipHexagone, { id as ClipHexagoneId } from '../../_Svg/ClipHexagone';
import InnerShadow, { id as InnerShadowId } from '../../_Svg/InnerShadow';
import ClipBody, { id as ClipBodyId } from './ClipBody';
import styles from './Card.scss';
import image from './YQJK5Ilz_400x400.jpg';

const Card = () => (
  <div className={styles.root}>
    <div className={styles.shadow}>
      <div className={styles.body}>
        <div className={styles.hex}>
          <LazyPicture
            alt="player"
            preClassName={styles.image}
            ratioClassName={styles.ratio}
            imageClassName={styles.image}
            image={{ preSrc: image, src: image }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default withInline({
  [ClipBodyId]: ClipBody,
  [ClipHexagoneId]: ClipHexagone,
  [InnerShadowId]: InnerShadow,
})(Card);
