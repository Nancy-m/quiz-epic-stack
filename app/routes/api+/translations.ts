import { type LoaderFunctionArgs, json } from "@remix-run/node";

import { i18nResources } from '#app/modules/i18next/initResources.server';
/**
 * The /api/translations route for retreieving translation namespaces.
 */
export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const lang = url.searchParams.get("lng");
    const namespace = url.searchParams.get("ns");
    if (!lang || !namespace) {
        return json({ error: "Missing language or namespace" }, { status: 400 });
    }

    const translation = i18nResources[lang]?.[namespace] ?? {};
    return json(translation);
}