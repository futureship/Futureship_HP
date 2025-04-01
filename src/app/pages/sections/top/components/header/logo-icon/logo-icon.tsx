'use client'

import { useTranslation } from 'react-i18next';
import styles from './logo-icon.module.scss'

export const LogoIcon: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={ styles.logoIcon }>{t('top.header.logo')}</div>
  )
}
