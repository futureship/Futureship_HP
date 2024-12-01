'use client';

import { ContactForm } from '@/app/contact/component/contact-form/contact-form.component';
import styles from './contact.module.scss';
import '@i18n';
import { ContactPreview } from '@/app/contact/component/contact-preview/contact-preview.component';
import { useContactViewModel } from '@/app/contact/contact.store';

const Contact: React.FC = () => {
  const { isEdit } = useContactViewModel();

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
