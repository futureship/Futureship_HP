'use client';

import { Header } from '@/app/pages/top/components/header/header';
import styles from './top.module.scss';
import '@i18n';
import { Footer } from '@/app/pages/top/components/header/footer';

export const Top: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.main}>Top</div>
      <Footer></Footer>
    </div>
  );
};
