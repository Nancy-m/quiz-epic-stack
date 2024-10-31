// Remix imports
import { EntryContext } from '@remix-run/node';

// Local imports
import { i18nResources } from "./initResources.server";
import { i18nextServer } from './i18next';

// i18next
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import config from './config';

/**
 * Initialized in the Remix entry.server and passed to React provider.
 */
export const initI18NextServerInstance = async (request: Request, remixContext: EntryContext) => {
    const i18nextInstance = createInstance();
    const lng = await i18nextServer.getLocale(request);
    const ns = i18nextServer.getRouteNamespaces(remixContext);
    await i18nextInstance
        .use(initReactI18next)
        .init({
            ...config,
            resources: i18nResources,
            lng,
            ns,
        });
    return i18nextInstance;
}

