'use client';

import ServiceInfo from '@/app/shared/serviceAndRecruit/components/service-info/serviceInfo';
import styles from './serviceAndRecruit.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';
import Footer from '@/app/components/footer/footer';
import RecruitService from '@/app/shared/serviceAndRecruit/components/recruit-service/recruitService';

export const ServiceAndRecruit: React.FC = () => {
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
      <div>
        <RecruitService
          title={t('recruit.recruit1.title')}
          description={[
            t('recruit.recruit1.description1'),
            t('recruit.recruit1.description2'),
          ]}
          button={t('recruit.recruit1.button')}
        ></RecruitService>
        <RecruitService
          title={t('recruit.recruit2.title')}
          description={[
            t('recruit.recruit2.description1'),
            t('recruit.recruit2.description2'),
          ]}
          button={t('recruit.recruit2.button')}
        ></RecruitService>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
