'use client';

import ColorFooter from '@/app/components/footer/color-footer/color-footer';
import { Recruit } from '@/app/shared/serviceAndRecruit/components/recruit-page/recruit';
import { Service } from '@/app/shared/serviceAndRecruit/components/service-page/service';
import '@i18n';
import styles from './serviceAndRecruit.module.scss';

export const ServiceAndRecruit: React.FC = () => {
  return (
    <div className={styles.servicePage}>
      <Service></Service>
      <Recruit></Recruit>
      <footer>
        <ColorFooter backGround=""></ColorFooter>
      </footer>
    </div>
  );
};
