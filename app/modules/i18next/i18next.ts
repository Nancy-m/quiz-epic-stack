import { createCookie } from '@remix-run/node';
import { RemixI18Next } from "remix-i18next/server";
import config from "./config";
import { i18nResources } from './initResources.server';



/**
 * Helper for workign with the i18next server
 */
export const localeCookie = createCookie("lng", {
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
});

export const i18nextServer = new RemixI18Next({
    detection: {
        supportedLanguages: config.supportedLngs as string[],
        fallbackLanguage: config.fallbackLng as string,
        cookie: localeCookie,
    },
    // This is the configuration for i18next used
    // when translating messages server-side only
    i18next: {
        ...config,
        resources: i18nResources,
    },
});