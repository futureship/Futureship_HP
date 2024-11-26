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
        <input placeholder={t('contact.form.placeholder.name')} />
      </div>
      <div>
        <span>{t('contact.form.column.email')}</span>
        <input placeholder={t('contact.form.placeholder.email')} />
      </div>
      <div>
        <span>{t('contact.form.column.phone')}</span>
        <input placeholder={t('contact.form.placeholder.phone')} />
      </div>
      <div>
        <span>{t('contact.form.column.place')}</span>
        <input placeholder={t('contact.form.placeholder.place')} />
      </div>
      <div>
        <span>{t('contact.form.column.position')}</span>
        <input placeholder={t('contact.form.placeholder.position')} />
      </div>
      <div>
        <span>{t('contact.form.column.kind')}</span>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.homepage')}</span>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.service')}</span>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.article')}</span>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.media')}</span>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.staff')}</span>
        <input type="checkbox" />
        <span>{t('contact.form.kindSelect.other')}</span>
      </div>
      <div>
        {/* checkbox */}
        <input type="checkbox" />
        <a>{t('contact.form.confirmSecurity.link')}</a>
        <span>{t('contact.form.confirmSecurity.message')}</span>
      </div>
      <button>{t('contact.form.confirm')}</button>
    </div>
  );
};
