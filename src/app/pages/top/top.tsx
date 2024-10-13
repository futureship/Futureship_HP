'use client';

import { Header } from '@/app/pages/top/components/header/header';
import styles from './top.module.scss';
import '@i18n';
import { Footer } from '@/app/pages/top/components/footer/footer';
import { Title } from '@/app/pages/top/components/title/title';
import { useTranslation } from 'react-i18next';

export const Top: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.main}>
        {/* <Title></Title> */}
        <div>{t('top.title.subTitle')}</div>
        <div>{t('top.title.title1')}</div>
        <div>{t('top.title.title2')}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};
