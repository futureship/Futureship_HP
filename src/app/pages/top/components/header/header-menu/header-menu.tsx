'use client';

import styles from './header-menu.module.scss';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
// import '@i18n/i18n'

export const HeaderMenu: FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const onClickService = () => {
    router.push('/service');
  };

  const onClickRecruit = () => {
    router.push('/recruit');
  };

  const onClickContact = () => {
    router.push('/about');
  };

  return (
    <div className={styles.menu}>
      <div className={styles.cursor}>{t('top.header.aboutMe')}</div>
      <div className={styles.cursor} onClick={onClickService}>
        {t('top.header.service')}
      </div>
      <div className={styles.cursor} onClick={onClickRecruit}>
        {t('top.header.recruit')}
      </div>
      <div className={styles.cursor} onClick={onClickContact}>
        {t('top.header.contact')}
      </div>
    </div>
  );
};
