'use client';

import { useContactViewModel } from '@/app/contact/contact.store';
import styles from './contact-preview.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';
import {
  contactKindEnumKeys,
  ContactKindSet,
} from '@/app/contact/contact.const';

export const ContactPreview: React.FC = () => {
  const { t } = useTranslation('common');
  const { updateIsEdit, name, email, phone, place, position, kind, contents } =
    useContactViewModel();

  const kindPreviewList = [];
  contactKindEnumKeys().forEach((key) => {
    if (kind[key as keyof ContactKindSet]) {
      kindPreviewList.push(t(`contact.form.kindSelect.${key}`));
    }
  });
  // const kindPreview = kindPreviewList.
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
        <span className={styles.columnContents}>{}</span>
      </div>
      <div className={styles.preview}>
        <span className={styles.columnName}>
          {t('contact.check.column.contents')}
        </span>
        <span className={styles.columnContents}>{contents}</span>
      </div>
      <button className={styles.edit} onClick={() => updateIsEdit(true)}>
        {t('contact.check.button.edit')}
      </button>
      <button className={styles.confirm}>
        {t('contact.check.button.confirm')}
      </button>
    </div>
  );
};
