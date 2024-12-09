'use client';

import { useContactViewModel } from '@/app/contact/contact.store';
import styles from './contact-form.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('common');
  const {
    updateIsEdit,
    updateName,
    updateEmail,
    updatePhone,
    updatePlace,
    updatePosition,
    updateKind,
    updateContents,
  } = useContactViewModel();

  return (
    <div className={styles.formArea}>
      <h1 className={styles.title}>{t('contact.form.title')}</h1>
      <div className={styles.form}>
        <span className={`${styles.inputTitle} ${styles.must}`}>
          {t('contact.form.column.name')}
        </span>
        <input
          className={styles.input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            updateName(event.target.value)
          }
          placeholder={t('contact.form.placeholder.name')}
        />
      </div>
      <div className={styles.form}>
        <span className={`${styles.inputTitle} ${styles.must}`}>
          {t('contact.form.column.email')}
        </span>
        <input
          className={styles.input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            updateEmail(event.target.value)
          }
          placeholder={t('contact.form.placeholder.email')}
        />
      </div>
      <div className={styles.form}>
        <span className={`${styles.inputTitle} ${styles.must}`}>
          {t('contact.form.column.phone')}
        </span>
        <input
          className={styles.input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            updatePhone(event.target.value)
          }
          placeholder={t('contact.form.placeholder.phone')}
        />
      </div>
      <div className={styles.form}>
        <span className={styles.inputTitle}>
          {t('contact.form.column.place')}
        </span>
        <input
          className={styles.input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            updatePlace(event.target.value)
          }
          placeholder={t('contact.form.placeholder.place')}
        />
      </div>
      <div className={styles.form}>
        <span className={styles.inputTitle}>
          {t('contact.form.column.position')}
        </span>
        <input
          className={styles.input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            updatePosition(event.target.value)
          }
          placeholder={t('contact.form.placeholder.position')}
        />
      </div>
      <div className={styles.kind}>
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
      <div className={styles.contents}>
        <h3 className={styles.kindTitle}>
          <span className={styles.must}>
            {t('contact.form.column.contents.title')}
          </span>
        </h3>
        <div className={styles.description}>
          {t('contact.form.column.contents.description')}
        </div>
        <input
          className={styles.fileInput}
          placeholder={t('contact.form.placeholder.contents.file')}
        />
        <textarea
          className={styles.textarea}
          placeholder={t('contact.form.placeholder.contents.textarea')}
        />
      </div>
      <div className={styles.security}>
        <input type="checkbox" />
        <a className={styles.securityLink}>
          {t('contact.form.confirmSecurity.link')}
        </a>
        <span>{t('contact.form.confirmSecurity.message')}</span>
      </div>
      <button className={styles.confirm} onClick={() => updateIsEdit(false)}>
        {t('contact.form.confirm')}
      </button>
    </div>
  );
};
