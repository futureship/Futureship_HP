'use client';

import styles from './mission-no.module.scss';
import '@i18n';

export const MissionNo = (props: { src: string; mission: string }) => {
  return (
    <div className={styles.contents}>
      <img src={props.src}></img>
      <span className={styles.message}>{props.mission}</span>
    </div>
  );
};
