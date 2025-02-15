// 'use-strict';
'use client';

import MonochromeFooter from '@/app/components/footer/monochrome-footer/monochrome-footer';
import styles from './security.module.scss';
import React, { useEffect, useState } from 'react';

const Security = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/doc/securityPolicy.json');
        const result = await response.json();
        setData(result.privacy as string);
      } catch (error) {
        console.error('Error fetching the file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.area}>
      <div className={styles.title}>プライバシーポリシー</div>
      <div className={styles.doc}>
        {data ? (
          <pre>
            {data.split('\n').map((line, index) => (
              <div key={index} className={styles.privacy}>
                {line}
              </div>
            ))}
          </pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <footer>
        <MonochromeFooter></MonochromeFooter>
      </footer>
    </div>
  );
};

export default Security;
