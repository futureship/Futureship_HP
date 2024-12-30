'use client';

import React from 'react';
import '@i18n';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.scss';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  // TODO ogawa: 以下の2つのpathをどうするか相談
  // const onClickMission = () => {
  //   router.push('/mission');
  // };

  // const onClickVision = () => {
  //   router.push('/vision');
  // };

  const onClickProfile = () => {
    router.push('/profile');
  };

  const onClickPolicy = () => {
    router.push('/policy');
  };

  const onClickService = () => {
    router.push('/service');
  };

  const onClickRecruit = () => {
    router.push('/recruit');
  };

  const onClickPrivacyPolicy = () => {
    router.push('/privacy');
  };

  const onClickContact = () => {
    router.push('/contact');
  };

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
          <div>
            <span className={styles.cursorPointer} onClick={onClickProfile}>
              {t('footer.menu.base.profile')}
            </span>
          </div>
          <div>{t('footer.menu.base.vision')}</div>
          <div>
            <span className={styles.cursorPointer}>
              {t('footer.menu.base.mission')}
            </span>
          </div>
          <div>
            <span className={styles.cursorPointer} onClick={onClickPolicy}>
              {t('footer.menu.base.message')}
            </span>
          </div>
        </div>

        <div className={styles.menuCategory}>
          <div>
            <span className={styles.cursorPointer} onClick={onClickService}>
              {t('footer.menu.service.service')}
            </span>
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
            <span className={styles.cursorPointer} onClick={onClickRecruit}>
              {t('footer.menu.recruitment.recruitment')}
            </span>
          </div>
        </div>

        <div className={styles.menuCategory}>
          <div className={styles.menuCategoryTitle}>
            <span
              className={styles.cursorPointer}
              onClick={onClickPrivacyPolicy}
            >
              {t('footer.menu.privacyPolicy.privacyPolicy')}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.contactArea}>
        <button className={styles.contact} onClick={onClickContact}>
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
