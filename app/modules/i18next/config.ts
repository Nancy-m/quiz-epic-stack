import { type InitOptions } from 'i18next';

/**
 * The languages that the i18n application supports. 
 */
export const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "zh", name: "中文" },
];

export default {
    supportedLngs: languages.map(({ code }) => code),
    fallbackLng: languages[0]?.code,
    ns: ['common'],
    defaultNS: "common",
} as InitOptions;
