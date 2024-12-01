'use client';

import { ContactForm } from '@/app/contact/component/contact-form/contact-form.component';
import styles from './contact.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';
import { ContactPreview } from '@/app/contact/component/contact-preview/contact-preview.component';

const Contact: React.FC = () => {
  const { t } = useTranslation('common');

  const isEdit = false;

  return (
    <div className={styles.backGround}>
      <div className={styles.contact}>
        {isEdit ? (
          <ContactForm></ContactForm>
        ) : (
          <ContactPreview></ContactPreview>
        )}
      </div>
    </div>
  );
};

export default Contact;
