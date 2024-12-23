'use client';

import styles from './serviceAndRecruit.module.scss';
import '@i18n';
import Footer from '@/app/components/footer/footer';
import { Service } from '@/app/shared/serviceAndRecruit/components/service-page/service';
import { Recruit } from '@/app/shared/serviceAndRecruit/components/recruit-page/recruit';

export const ServiceAndRecruit: React.FC = () => {
  return (
    <div className={styles.servicePage}>
      <Service></Service>
      <Recruit></Recruit>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
