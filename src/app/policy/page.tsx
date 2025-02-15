'use client';

import React, { useEffect, useState } from 'react';
import '@i18n';
import styles from './policy.module.scss';

import { useTranslation } from 'react-i18next';
import ColorFooter from '@/app/components/footer/color-footer/color-footer';

const Policy: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/doc/message.json');
        const result = await response.json();
        setData(result.message as string);
      } catch (error) {
        console.error('Error fetching the file:', error);
      }
    };

    fetchData();
  }, []);

  const { t } = useTranslation('common');

  return (
    <div className={styles.base}>
      <h1 className={styles.title}>{t('message.title')}</h1>
      <div className={styles.contents}>
        <div className={styles.faceImg}></div>
        <div className={styles.template}>
          {data ? (
            <pre>
              {data.split('\n').map((line, index) => (
                <div key={index} className={styles.message}>
                  {line}
                </div>
              ))}
            </pre>
          ) : (
            <p>Loading...</p>
          )}
          {/* TODO：実装してから適用 */}
          {/* <div className={styles.button}>
            <button className={styles.expandButton}>+</button>
            <span className={styles.buttonMessage}>
              {t('message.readMore')}
            </span>
          </div> */}
        </div>
      </div>
      <footer>
        <ColorFooter backGround="white2"></ColorFooter>
      </footer>
    </div>
  );
};
export default Policy;
