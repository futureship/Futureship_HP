'use client';

import styles from './contact-preview.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

export const ContactPreview: React.FC = () => {
  const { t } = useTranslation('common');

  const name = 'お名前太郎';
  const email = 'xxxxxxx@xxxx.com';
  const phone = '080-1234-4567';
  const place = 'マルマル株式会社';
  const position = 'マルマル部長';
  const kind = 'ホームページについて、その他';
  const contents =
    'マルマルマルマルマルマルマルマルマルマル丸、マルマルマルマル、マルマルマルマル';

  return (
    <div className={styles.previewArea}>
      <div className={styles.title}>{t('contact.check.title')}</div>
      <div className={styles.description}>{t('contact.check.description')}</div>
      <div className={styles.preview}>
        <span className={styles.columnName}>
          {t('contact.check.column.name')}
        </span>
        <span className={styles.columnContents}>{name}</span>
      </div>
      <div className={styles.preview}>
        <span className={styles.columnName}>
          {t('contact.check.column.email')}
        </span>
        <span className={styles.columnContents}>{email}</span>
      </div>
      <div className={styles.preview}>
        <span className={styles.columnName}>
          {t('contact.check.column.phone')}
        </span>
        <span className={styles.columnName}>{phone}</span>
      </div>
      <div className={styles.preview}>
        <span className={styles.columnName}>
          {t('contact.check.column.place')}
        </span>
        <span className={styles.columnContents}>{place}</span>
      </div>
      <div className={styles.preview}>
        <span className={styles.columnName}>
          {t('contact.check.column.position')}
        </span>
        <span className={styles.columnContents}>{position}</span>
      </div>
      <div className={styles.preview}>
        <span className={styles.columnName}>
          {t('contact.check.column.kind')}
        </span>
        <span className={styles.columnContents}>{kind}</span>
      </div>
      <div className={styles.preview}>
        <span className={styles.columnName}>
          {t('contact.check.column.contents')}
        </span>
        <span className={styles.columnContents}>{contents}</span>
      </div>
      <button className={styles.edit}>{t('contact.check.button.edit')}</button>
      <button className={styles.confirm}>
        {t('contact.check.button.confirm')}
      </button>
    </div>
  );
};
