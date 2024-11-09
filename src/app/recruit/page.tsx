'use client';

import RecruitService from '@/app/recruit/recruitService/recruitService';
import React from 'react';
import '@i18n';
import { useTranslation } from 'react-i18next';

const Recruit: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div>
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

export default Recruit;
