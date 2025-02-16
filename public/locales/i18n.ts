// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonJa from './ja/common.json';

i18n
  .use(initReactI18next) // React用のi18nextを初期化
  .init({
    resources: {
      ja: {
        common: commonJa,
      },
    },
    lng: 'ja', // 初期言語
    fallbackLng: 'ja', // フォールバック言語
    interpolation: {
      escapeValue: false, // ReactはXSS対策を行うため、エスケープは不要
    },
  });

export default i18n;