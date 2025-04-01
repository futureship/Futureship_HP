'use client';

import '@app/globals.css';
import { OverWave } from '@app/pages/components/overWave/overWave';
import { UnderWave } from '@app/pages/components/underWave/underWave';
import { ServiceAndRecruit } from '@app/shared/serviceAndRecruit/serviceAndRecruit';
import styles from './service.module.scss';

const Service: React.FC = () => {
  return (
    <div className={styles.container}>
      <OverWave></OverWave>
      <ServiceAndRecruit></ServiceAndRecruit>
      <UnderWave></UnderWave>
    </div>
  );
};

export default Service;
