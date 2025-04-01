'use client';

import About from '@app/pages/sections/about/page';
import Mission from '@app/pages/sections/mission/page';
import Service from '@app/pages/sections/service/page';
import { Top } from '@app/pages/sections/top/top';
import styles from './main.module.scss';

const Main: React.FC = () => {
  return (
    <main className={styles.mainContainer}>
      <section id="top" className={styles.section}>
        <Top />
      </section>

      <section id="mission" className={styles.section}>
        <Mission />
      </section>

      <section id="service" className={styles.section}>
        <Service />
      </section>

      <section id="about" className={styles.section}>
        <About />
      </section>
    </main>
  );
};

export default Main;
