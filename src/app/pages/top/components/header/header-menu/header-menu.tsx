'use client';

import styles from './header-menu.module.scss';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

export const HeaderMenu: FC = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.menu}>
      <div className={styles.cursor}>{t('top.header.aboutMe')}</div>
      <div className={styles.cursor}>{t('top.header.service')}</div>
      <div className={styles.cursor}>{t('top.header.recruit')}</div>
      <div className={styles.cursor}>{t('top.header.contact')}</div>
    </div>
  );
};
