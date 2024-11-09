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
  );
};

export default Recruit;
