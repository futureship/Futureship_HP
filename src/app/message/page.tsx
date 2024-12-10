'use client';

import React, { useEffect, useState } from 'react';
import '@i18n';
import styles from './message.module.scss';
import ReactMarkdown from 'react-markdown';

import { useTranslation } from 'react-i18next';

const Message: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    fetch('/public/locales/ja/message.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  const { t } = useTranslation('common');

  return (
    <div className={styles.base}>
      <h1 className={styles.title}>{t('message.title')}</h1>
      <div className={styles.contents}>
        <div className={styles.faceImg}></div>
        <div className={styles.template}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.expandButton}>+</button>
        <span className={styles.buttonMessage}>{t('message.readMore')}</span>
      </div>
    </div>
  );
};
export default Message;
