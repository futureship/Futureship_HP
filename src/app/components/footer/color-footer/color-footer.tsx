'use client';

import React from 'react';
import '@i18n';
import { useTranslation } from 'react-i18next';
import styles from './color-footer.module.scss';
import { useRouter } from 'next/navigation';

const ColorFooter: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const onClickMission = () => {
    router.push('/mission');
  };

  const onClickAbout = () => {
    router.push('/about');
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

  const onClickSecurityPolicy = () => {
    router.push('/security');
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
            <span className={styles.cursorPointer} onClick={onClickAbout}>
              {t('footer.menu.base.profile')}
            </span>
          </div>
          <div>
            <span className={styles.cursorPointer} onClick={onClickMission}>
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
          <div className={styles.menuCategoryTitle}>
            <span className={styles.cursorPointer} onClick={onClickService}>
              {t('footer.menu.service.service')}
            </span>
          </div>
          {/* TODO: 実装されてから復活 */}
          {/* <div>{t('footer.menu.service.service1')}</div>
          <div>{t('footer.menu.service.service2')}</div> */}
        </div>

        {/* TODO: 実装されてから復活 */}
        {/* <div className={styles.menuCategory}>
          <div className={styles.menuCategoryTitle}>
            {t('footer.menu.donation.donation')}
          </div>
        </div> */}

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

        <div className={styles.menuCategory}>
          <div className={styles.menuCategoryTitle}>
            <span
              className={styles.cursorPointer}
              onClick={onClickSecurityPolicy}
            >
              {t('footer.menu.securityPolicy.securityPolicy')}
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

export default ColorFooter;
