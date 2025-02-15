// 'use-strict';
'use client';

import styles from './privacy.module.scss';
import React, { useEffect, useState } from 'react';

const Privacy = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/doc/privacyPolicy.json');
        const result = await response.json();
        setData(result.privacy as string);
      } catch (error) {
        console.error('Error fetching the file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.privacy}>
      <div>プライバシーポリシー</div>
      <div>
        {data ? (
          <pre>
            {data.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Privacy;
