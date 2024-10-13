'use client';

import styles from './mission-no.module.scss';
import '@i18n';

export const MissionNo = (props: { src: string; mission: string }) => {
  return (
    <>
      <img src={props.src}></img>;<div>{props.mission}</div>
    </>
  );
};
