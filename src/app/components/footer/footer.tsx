'use client';

import React from 'react';
import '@i18n';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.footer}>
      <div className={styles.curve}></div>
      <div className={styles.menu}>
        <div className={styles.company}>
          <div className={styles.companyName}>{t('footer.companyName')}</div>
          <label>{t('footer.subTitle')}</label>
        </div>

        <div className={styles.menuCategory}>
          <div className={styles.menuCategoryTitle}>
            {t('footer.menu.base.forAboutMe')}
          </div>
          <div>{t('footer.menu.base.profile')}</div>
          <div>{t('footer.menu.base.vision')}</div>
          <div>{t('footer.menu.base.mission')}</div>
          <div>{t('footer.menu.base.message')}</div>
        </div>

        <div className={styles.menuCategory}>
          <div className={styles.menuCategoryTitle}>
            {t('footer.menu.service.service')}
          </div>
          <div>{t('footer.menu.service.service1')}</div>
          <div>{t('footer.menu.service.service2')}</div>
        </div>

        <div className={styles.menuCategory}>
          <div className={styles.menuCategoryTitle}>
            {t('footer.menu.donation.donation')}
          </div>
        </div>

        <div className={styles.menuCategory}>
          <div className={styles.menuCategoryTitle}>
            {t('footer.menu.recruitment.recruitment')}
          </div>
        </div>

        <div className={styles.menuCategory}>
          <div className={styles.menuCategoryTitle}>
            {t('footer.menu.privacyPolicy.privacyPolicy')}
          </div>
        </div>
      </div>
      <div className={styles.contactArea}>
        <button className={styles.contact}>
          <span className={styles.contactMsg}>{t('footer.contact')}</span>
          <span className={styles.contactSub}>
            {t('footer.contactMessage')}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
