import  i18n  from "i18next";
import { initReactI18next, get } from 'react-i18next';
import { getLocales } from 'expo-localization';

import tr from './lang/tr.json';
import en from './lang/en.json';

i18n
.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: { tr, en },
    lng: getLocales()[0].languageCode,  // tr, en, de vs..
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;