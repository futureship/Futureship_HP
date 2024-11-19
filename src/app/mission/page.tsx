'use client';

import { MissionNo } from '@/app/mission/component/mission-no/mission-no';
import styles from './mission.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

const Mission: React.FC = () => {
  const { t } = useTranslation('common');

  const mission1 = t('mission.mission1');
  const mission2 = t('mission.mission2');
  const message1 = t('mission.message.message1')
    .split('\n')
    .map((line, index) => (
      <div className={styles.message} key={index}>
        {line}
      </div>
    ));
  const message2 = t('mission.message.message2')
    .split('\n')
    .map((line, index) => (
      <div className={styles.message} key={index}>
        {line}
      </div>
    ));
  const message3 = t('mission.message.message3')
    .split('\n')
    .map((line, index) => (
      <div className={styles.message} key={index}>
        {line}
      </div>
    ));

  return (
    <div className={styles.container}>
      <img className={styles.img} src="/assets/svg/over-wave2.svg"></img>
      <div className={styles.main}>
        <div className={styles.missionContents}>
          <div className={styles.missionTitle}>{t('mission.mission')}</div>
          <div>
            <MissionNo
              src="/assets/svg/mission-number1.svg"
              mission={mission1}
            ></MissionNo>
            <MissionNo
              src="/assets/svg/mission-number2.svg"
              mission={mission2}
            ></MissionNo>
          </div>
        </div>
        {message1}
        <br />
        {message2}
        <br />
        {message3}
      </div>
      <img className={styles.img} src="/assets/svg/under-wave2.svg"></img>
    </div>
  );
};

export default Mission;
