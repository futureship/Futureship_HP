'use client';

import { useContactViewModel } from '@/app/contact/store/contact.store';
import styles from './contact-form.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { useContactValidateStatusViewModel } from '@/app/contact/validator/contact-validate-status.store';
import { ContentsValidator } from '@/app/contact/validator/contact.validator';
import { ContactKindSet } from '@/app/contact/store/contact.const';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('common');
  const {
    updateIsEdit,
    name,
    updateName,
    email,
    updateEmail,
    phone,
    updatePhone,
    updatePlace,
    updatePosition,
    kind,
    updateKind,
    contents,
    updateContents,
    files,
    addFiles,
    deleteFile,
  } = useContactViewModel();

  const {
    nameValidatorStatus,
    updateNameValidatorStatus,
    emailValidatorStatus,
    updateEmailValidatorStatus,
    phoneValidatorStatus,
    updatePhoneValidatorStatus,
    kindValidatorStatus,
    updateKindValidatorStatus,
    contentsValidatorStatus,
    updateContentsValidatorStatus,
    isExistsValidatorError,
  } = useContactValidateStatusViewModel();
  const MAX_TOTAL_SIZE = 5 * 1024 * 1024; // 最大合計サイズを5MBに設定

  const onDrop = (acceptedFiles: File[]) => {
    addFiles(acceptedFiles);
    const totalSize = acceptedFiles.reduce((acc, file) => acc + file.size, 0);
    console.log('受け取ったファイルサイズ', totalSize);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const filesName = files.map((file: File, index: number) => (
    <div key={index} className={styles.fileName}>
      <span>・{file.name}</span>
      <span onClick={() => deleteFile(index)} className={styles.deleteFile}>
        ×
      </span>
    </div>
  ));

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateName(event.target.value);
    updateNameValidatorStatus(
      ContentsValidator.getContactNameValidateErrorCode(event.target.value)
    );
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateEmail(event.target.value);
    updateEmailValidatorStatus(
      ContentsValidator.getContactEmailValidateErrorCode(event.target.value)
    );
  };

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    updatePhone(event.target.value);
    updatePhoneValidatorStatus(
      ContentsValidator.getContactPhoneValidateErrorCode(event.target.value)
    );
  };

  function onChangeKind(kind: ContactKindSet) {
    updateKind(kind);
    updateKindValidatorStatus(
      ContentsValidator.getContactKindValidateErrorCode(kind)
    );
  }

  const onChangeContents = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateContents(event.target.value);
    updateContentsValidatorStatus(
      ContentsValidator.getContactContentsValidateErrorCode(
        event.target.value,
        files
      )
    );
  };

  const onClickConfirm = () => {
    setValidatorStatus();
    if (!isExistsValidatorError()) {
      updateIsEdit(false);
    }
  };

  function setValidatorStatus() {
    updateNameValidatorStatus(
      ContentsValidator.getContactNameValidateErrorCode(name)
    );
    updateEmailValidatorStatus(
      ContentsValidator.getContactEmailValidateErrorCode(email)
    );
    updatePhoneValidatorStatus(
      ContentsValidator.getContactPhoneValidateErrorCode(phone)
    );
    updateKindValidatorStatus(
      ContentsValidator.getContactKindValidateErrorCode(kind)
    );
    updateContentsValidatorStatus(
      ContentsValidator.getContactContentsValidateErrorCode(contents, files)
    );
  }

  return (
    <div className={styles.formArea}>
      <h1 className={styles.title}>{t('contact.form.title')}</h1>
      <div className={styles.form}>
        <span className={`${styles.inputTitle} ${styles.must}`}>
          {t('contact.form.column.name')}
        </span>
        <input
          className={styles.input}
          onChange={onChangeName}
          placeholder={t('contact.form.placeholder.name')}
        />
      </div>
      <div className={styles.form}>
        <span className={`${styles.inputTitle} ${styles.must}`}>
          {t('contact.form.column.email')}
        </span>
        <input
          className={styles.input}
          onChange={onChangeEmail}
          placeholder={t('contact.form.placeholder.email')}
        />
      </div>
      <div className={styles.form}>
        <span className={`${styles.inputTitle} ${styles.must}`}>
          {t('contact.form.column.phone')}
        </span>
        <input
          className={styles.input}
          onChange={onChangePhone}
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
        <input
          type="checkbox"
          onClick={() => onChangeKind({ ...kind, homepage: !kind.homepage })}
          checked={kind.homepage}
        />
        <span>{t('contact.form.kindSelect.homepage')}</span>
        <input
          type="checkbox"
          onClick={() => onChangeKind({ ...kind, service: !kind.service })}
          checked={kind.service}
        />
        <span>{t('contact.form.kindSelect.service')}</span>
        <input
          type="checkbox"
          onClick={() => onChangeKind({ ...kind, article: !kind.article })}
          checked={kind.article}
        />
        <span>{t('contact.form.kindSelect.article')}</span>
        <br />
        <input
          type="checkbox"
          onClick={() => onChangeKind({ ...kind, media: !kind.media })}
          checked={kind.media}
        />
        <span>{t('contact.form.kindSelect.media')}</span>
        <br />
        <input
          type="checkbox"
          onClick={() => onChangeKind({ ...kind, staff: !kind.staff })}
          checked={kind.staff}
        />
        <span>{t('contact.form.kindSelect.staff')}</span>
        <input
          type="checkbox"
          onClick={() => onChangeKind({ ...kind, other: !kind.other })}
          checked={kind.other}
        />
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
        <div {...getRootProps({ className: styles.fileInput })}>
          <input {...getInputProps()} />
          <p>{t('contact.form.placeholder.contents.file')}</p>
        </div>
        <div className={styles.filesName}>{filesName}</div>
        <textarea
          className={styles.textarea}
          placeholder={t('contact.form.placeholder.contents.textarea')}
          onChange={onChangeContents}
        />
      </div>
      <div className={styles.security}>
        <input type="checkbox" />
        <a className={styles.securityLink}>
          {t('contact.form.confirmSecurity.link')}
        </a>
        <span>{t('contact.form.confirmSecurity.message')}</span>
      </div>
      <button className={styles.confirm} onClick={onClickConfirm}>
        {t('contact.form.confirm')}
      </button>
    </div>
  );
};
