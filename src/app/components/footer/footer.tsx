'use client';

import React from 'react';
import '@i18n';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.footer}>
      <div className={styles.menu}>
        <div>
          <div className={styles.companyName}>{t('footer.companyName')}</div>
          <div>{t('footer.subTitle')}</div>
        </div>

        <div>
          <div className={styles.menuCategory}>
            {t('footer.menu.base.forAboutMe')}
          </div>
          <div>{t('footer.menu.base.profile')}</div>
          <div>{t('footer.menu.base.vision')}</div>
          <div>{t('footer.menu.base.mission')}</div>
          <div>{t('footer.menu.base.message')}</div>
        </div>

        <div>
          <div className={styles.menuCategory}>
            {t('footer.menu.service.service')}
          </div>
          <div>{t('footer.menu.service.service1')}</div>
          <div>{t('footer.menu.service.service2')}</div>
        </div>

        <div>
          <div className={styles.menuCategory}>
            {t('footer.menu.donation.donation')}
          </div>
        </div>

        <div>
          <div className={styles.menuCategory}>
            {t('footer.menu.recruitment.recruitment')}
          </div>
        </div>

        <div>
          <div className={styles.menuCategory}>
            {t('footer.menu.privacyPolicy.privacyPolicy')}
          </div>
        </div>
      </div>
      <div>
        <button>
          <div>{t('footer.contact')}</div>
          <div>{t('footer.contactMessage')}</div>
        </button>
      </div>
    </div>
  );
};

export default Footer;
