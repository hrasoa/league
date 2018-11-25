/* eslint-disable react/prop-types */
// @@flow
import React, { useContext } from 'react';
import LazyPicture from '../../_LazyPicture';
import { SvgContext } from '../../_SvgInline';
import ClipHexagone, { id as hexagoneId } from '../../_Svg/ClipHexagone';
import InnerShadow, { id as shadowId } from '../../_Svg/InnerShadow';
import ClipBody, { id as bodyId } from './ClipBody';
import styles from './Card.scss';
import picture from './Picture.scss';

const Card = ({
  id,
  name,
  image,
  pos,
  team,
}) => {
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
        {team && team.logo && (
          <span className={styles.team}>
            <img alt="team" src={team.logo} />
          </span>
        )}
        {name} <span className={styles.position}>{pos}</span>
      </div>
    </div>
  );
};

export default Card;
