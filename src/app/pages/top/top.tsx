'use client';

import styles from './top.module.scss';
import '@i18n';
import { Header } from '@/app/pages/top/components/header/header';
import { Footer } from '@/app/pages/top/components/footer/footer';
import { useTranslation } from 'react-i18next';

export const Top: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.main}>
        <div>{t('top.title.subTitle')}</div>
        <div>{t('top.title.title1')}</div>
        <div>{t('top.title.title2')}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};
