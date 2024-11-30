'use client';

import styles from './contact-form.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('common');

  const mustMark = <span>*</span>;

  return (
    <div className={styles.formArea}>
      <h1 className={styles.title}>{t('contact.form.title')}</h1>
      <div className={styles.form}>
        <span className={`${styles.inputTitle} ${styles.must}`}>
          {t('contact.form.column.name')}
        </span>
        <input
          className={styles.input}
          placeholder={t('contact.form.placeholder.name')}
        />
      </div>
      <div className={styles.form}>
        <span className={`${styles.inputTitle} ${styles.must}`}>
          {t('contact.form.column.email')}
        </span>
        <input
          className={styles.input}
          placeholder={t('contact.form.placeholder.email')}
        />
      </div>
      <div className={styles.form}>
        <span className={`${styles.inputTitle} ${styles.must}`}>
          {t('contact.form.column.phone')}
        </span>
        <input
          className={styles.input}
          placeholder={t('contact.form.placeholder.phone')}
        />
      </div>
      <div className={styles.form}>
        <span className={styles.inputTitle}>
          {t('contact.form.column.place')}
        </span>
        <input
          className={styles.input}
          placeholder={t('contact.form.placeholder.place')}
        />
      </div>
      <div className={styles.form}>
        <span className={styles.inputTitle}>
          {t('contact.form.column.position')}
        </span>
        <input
          className={styles.input}
          placeholder={t('contact.form.placeholder.position')}
        />
      </div>
      <div>
        <h3 className={styles.kindTitle}>
          <span className={styles.must}>{t('contact.form.column.kind')}</span>
          <span>{t('contact.form.column.multiSelectable')}</span>
        </h3>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.homepage')}</span>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.service')}</span>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.article')}</span>
        <br />
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.media')}</span>
        <br />
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.staff')}</span>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.other')}</span>
      </div>
      <div>
        <input type="checkbox" />
        <a>{t('contact.form.confirmSecurity.link')}</a>
        <span>{t('contact.form.confirmSecurity.message')}</span>
      </div>
      <button>{t('contact.form.confirm')}</button>
    </div>
  );
};
