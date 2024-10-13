'use client';

import styles from './title.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

export const Title: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.titleArea}>
      <div>{t('top.title.subTitle')}</div>
      <div>{t('top.title.title1')}</div>
      <div>{t('top.title.title2')}</div>
    </div>
  );
};
