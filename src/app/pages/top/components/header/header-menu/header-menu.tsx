'use client';

import styles from './header-menu.module.scss';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { useRouter } from 'next/navigation';

export const HeaderMenu: FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const onClickService = () => {
    router.push('/service');
  };
  return (
    <div className={styles.menu}>
      <div className={styles.cursor}>{t('top.header.aboutMe')}</div>
      <div className={styles.cursor} onClick={onClickService}>
        {t('top.header.service')}
      </div>
      <div className={styles.cursor}>{t('top.header.recruit')}</div>
      <div className={styles.cursor}>{t('top.header.contact')}</div>
    </div>
  );
};
