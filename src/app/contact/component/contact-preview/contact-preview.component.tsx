'use client';

import styles from './contact-preview.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

export const ContactPreview: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <div>{t('contact.check.title')}</div>
      <div>
        <span>{t('contact.check.column.name')}</span>
        {/* <input /> */}
      </div>
      <div>
        <span>{t('contact.check.column.email')}</span>
        {/* <input /> */}
      </div>
      <div>
        <span>{t('contact.check.column.phone')}</span>
        {/* <input /> */}
      </div>
      <div>
        <span>{t('contact.check.column.place')}</span>
        {/* <input /> */}
      </div>
      <div>
        <span>{t('contact.check.column.position')}</span>
        {/* <input /> */}
      </div>
      <div>
        <span>{t('contact.check.column.kind')}</span>
        {/* <input /> */}
      </div>
      <div>
        <span>{t('contact.check.column.contents')}</span>
      </div>
      <button>{t('contact.check.button.edit')}</button>
      <button>{t('contact.check.button.confirm')}</button>
    </div>
  );
};
