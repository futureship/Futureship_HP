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
    </div>
  );
};
