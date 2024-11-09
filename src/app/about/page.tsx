'use client';

import styles from './about.module.scss';
import '@i18n';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation('common');
  const history = t('about.contents.history')
    .split('\n')
    .map((line) => (
      <tr>
        <td className={styles.historyTd}>{line.split(':')[0]}</td>
        <td>{line.split(':')[1]}</td>
      </tr>
    ));

  return (
    <div className={styles.container}>
      <div className={styles.aboutTitle}>{t('about.title')}</div>
      <div className={styles.companyProfile}>
        <table>
          <tbody>
            <tr>
              <td className={styles.companyProfileTd}>
                {t('about.companyName')}
              </td>
              <td>{t('about.contents.companyName')}</td>
            </tr>
            <tr>
              <td className={styles.companyProfileTd}>
                {t('about.foundationDay')}
              </td>
              <td>{t('about.contents.foundationDay')}</td>
            </tr>
            <tr>
              <td className={styles.companyProfileTd}>{t('about.address')}</td>
              <td>{t('about.contents.address')}</td>
            </tr>
            <tr>
              <td className={styles.companyProfileTd}>{t('about.ceo')}</td>
              <td>{t('about.contents.ceo')}</td>
            </tr>
            <tr>
              <td className={styles.companyProfileTd}>{t('about.business')}</td>
              <td>{t('about.contents.business')}</td>
            </tr>
            <tr>
              <td className={styles.companyProfileTd}>{t('about.vision')}</td>
              <td>{t('about.contents.vision')}</td>
            </tr>
            <tr>
              <td className={styles.companyProfileTd}>{t('about.mission')}</td>
              <td className={styles.preLine}>{t('about.contents.mission')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table>
        <thead>
          <tr>
            <th className={styles.historyTh}>{t('about.history')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{history}</tbody>
      </table>
    </div>
  );
};

export default About;
