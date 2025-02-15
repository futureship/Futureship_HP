'use client';

import styles from './serviceAndRecruit.module.scss';
import '@i18n';
import ColorFooter from '@/app/components/footer/color-footer/color-footer';
import { Service } from '@/app/shared/serviceAndRecruit/components/service-page/service';
import { Recruit } from '@/app/shared/serviceAndRecruit/components/recruit-page/recruit';

export const ServiceAndRecruit: React.FC = () => {
  return (
    <div className={styles.servicePage}>
      <Service></Service>
      <Recruit></Recruit>
      <footer>
        <ColorFooter></ColorFooter>
      </footer>
    </div>
  );
};
