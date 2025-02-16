'use client';

import { ContactForm } from '@/app/contact/component/contact-form/contact-form.component';
import styles from './contact.module.scss';
import '@i18n';
import { ContactPreview } from '@/app/contact/component/contact-preview/contact-preview.component';
import { useContactViewModel } from '@/app/contact/store/contact.store';
import MonochromeFooter from '@/app/components/footer/monochrome-footer/monochrome-footer';

const Contact: React.FC = () => {
  const { isEdit } = useContactViewModel();

  return (
    <div className={styles.base}>
      <div className={styles.backGround}>
        <div className={styles.contact}>
          {isEdit ? (
            <ContactForm></ContactForm>
          ) : (
            <ContactPreview></ContactPreview>
          )}
        </div>
      </div>
      <footer className={styles.footer}>
        <MonochromeFooter></MonochromeFooter>
      </footer>
    </div>
  );
};

export default Contact;
