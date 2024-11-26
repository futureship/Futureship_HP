'use client';

import styles from './contact-form.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <div>{t('contact.form.title')}</div>
      <div>
        <span>{t('contact.form.column.name')}</span>
        <input />
      </div>
      <div>
        <span>{t('contact.form.column.email')}</span>
        <input />
      </div>
      <div>
        <span>{t('contact.form.column.phone')}</span>
        <input />
      </div>
      <div>
        <span>{t('contact.form.column.place')}</span>
        <input />
      </div>
      <div>
        <span>{t('contact.form.column.position')}</span>
        <input />
      </div>
      <div>
        <span>{t('contact.form.column.kind')}</span>
        <input />
      </div>
      <div>
        {/* checkbox */}
        <a>{t('contact.form.confirmSecurity.link')}</a>
        <span>{t('contact.form.confirmSecurity.message')}</span>
      </div>
      <button>{t('contact.form.confirm')}</button>
    </div>
  );
};
