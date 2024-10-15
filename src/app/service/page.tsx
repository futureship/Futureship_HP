'use client';

import styles from './service.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

const Service: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <img src=""></img>
      <div>service</div>
      <div className={styles.service1}>
        <img src=""></img>
        <div>
          <div>つむぐ</div>
          <div>{}</div>
          <button></button>
        </div>
      </div>
      <div className={styles.service2}>
        <div>
          <div>ミラプロ</div>
          <div>{}</div>
          <button className={styles.button}>ミラプロを知る</button>
        </div>
        <img src=""></img>
      </div>

      <div>{}</div>
      <div></div>
      <button></button>

      <div></div>
      <div></div>
      <button></button>
    </div>
  );
};

export default Service;
