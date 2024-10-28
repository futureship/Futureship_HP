'use client';

import styles from './service.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

const Service: React.FC = () => {
  const { t } = useTranslation('common');
  const service1Description1 = t('service.service1.description1')
    .split('\n')
    .map((line) => <div>{line}</div>);

  const service1Description2 = t('service.service1.description2')
    .split('\n')
    .map((line) => <div>{line}</div>);

  const service2Description1 = t('service.service2.description1')
    .split('\n')
    .map((line) => <div>{line}</div>);

  const service2Description2 = t('service.service2.description2')
    .split('\n')
    .map((line) => <div>{line}</div>);

  return (
    <div>
      <div className={styles.title}>{t('service.title')}</div>
      <div className={styles.service1}>
        <img src="/assets/svg/service1-img.svg"></img>
        <div>
          <div>{t('service.service1.title')}</div>
          <div>{service1Description1}</div>
          <div>{service1Description2}</div>
          <button className={styles.button}>
            {t('service.service1.serviceAbout')}
          </button>
        </div>
      </div>
      <div className={styles.service2}>
        <div>
          <div>{t('service.service2.title')}</div>
          <div>{service2Description1}</div>
          <div>{service2Description2}</div>
          <button className={styles.button}>
            {t('service.service2.serviceAbout')}
          </button>
        </div>
        <img src="/assets/svg/service2-img.svg"></img>
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
