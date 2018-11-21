/* eslint-disable */
// @@flow
import React, { useContext } from 'react';
import LazyPicture from '../../_LazyPicture';
import { SvgContext } from '../../_SvgInline';
import ClipHexagone, { id as hexagoneId } from '../../_Svg/ClipHexagone';
import InnerShadow, { id as shadowId } from '../../_Svg/InnerShadow';
import ClipBody, { id as bodyId } from './ClipBody';
import styles from './Card.scss';
import picture from './Picture.scss';
import image from './YQJK5Ilz_400x400.jpg';
import team from './team.png';

const Card = ({ id }) => {
  const { addSvgs } = useContext(SvgContext);
  addSvgs({
    [bodyId]: ClipBody,
    [hexagoneId]: ClipHexagone,
    [shadowId]: InnerShadow,
  });

  return (
    <div className={styles.root}>
      <div className={styles.shadow}>
        <div className={styles.body}>
          <div className={styles.bodyInner}>
            <div className={styles.hexagone}>
              <LazyPicture
                id={id}
                alt="player"
                styles={picture}
                image={{ preSrc: image, src: image }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bio}>
        <span className={styles.team}>
          <img alt="team" src={team} />
        </span>
        player name <span className={styles.position}>cb</span>
      </div>
    </div>
  );
};

export default Card;
