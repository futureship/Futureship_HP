
'use client'
import styles from './header-menu.module.scss'
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
// import '@i18n/i18n'

export const HeaderMenu: FC = () => {
  const { t } = useTranslation('common');
  return (
    <div className={ styles.menu }>
      <div>{ t('top.header.aboutMe') }</div>
      <div>{ t('top.header.service') }</div>
      <div>{ t('top.header.recruit') }</div>
      <div>{ t('top.header.contact') }</div>
    </div>
  )
}