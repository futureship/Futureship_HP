'use client';

import RecruitService from '@/app/service/components/recruitService/recruitService';
import ServiceInfo from '@/app/service/components/service-info/serviceInfo';
import styles from './service.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

const Service: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceTitle}>{t('service.title')}</div>
      <div className={styles.service1}>
        <div className={styles.container}>
          <img src="/assets/svg/service1-img.svg"></img>
        </div>
        <ServiceInfo
          title={t('service.service1.title')}
          description={[
            t('service.service1.description1'),
            t('service.service1.description2'),
          ]}
          button={t('service.service1.button')}
        ></ServiceInfo>
      </div>
      <div className={styles.service2}>
        <ServiceInfo
          title={t('service.service2.title')}
          description={[
            t('service.service2.description1'),
            t('service.service2.description2'),
          ]}
          button={t('service.service2.button')}
        ></ServiceInfo>
        <div className={styles.container}>
          <img src="/assets/svg/service2-img.svg"></img>
        </div>
      </div>

      <RecruitService
        title={t('service.recruitService1.title')}
        description={[
          t('service.recruitService1.description1'),
          t('service.recruitService1.description2'),
        ]}
        button={t('service.recruitService1.button')}
      ></RecruitService>

      <RecruitService
        title={t('service.recruitService2.title')}
        description={[
          t('service.recruitService2.description1'),
          t('service.recruitService2.description2'),
        ]}
        button={t('service.recruitService2.button')}
      ></RecruitService>
    </div>
  );
};

export default Service;
