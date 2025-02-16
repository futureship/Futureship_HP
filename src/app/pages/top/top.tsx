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
        <div className={styles.subTitleArea}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.subTitle}>{t('top.title.subTitle')}</div>
        </div>
        <div className={styles.title}>{t('top.title.title1')}</div>
        <div className={styles.title}>{t('top.title.title2')}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};
