import type { DocsCollectionItem } from "@nuxt/content"

export const resolveDoc = (
    repo: string,
    module: string,
    version: number | "latest",
): Promise<DocsCollectionItem | null> => {
    return new Promise((resolve, reject) => {
        // Always serve the canonical doc, if requested
        if (version == "latest") {
            queryCollection('docs')
                .where('repo', '=', repo)
                .where('module', '=', module)
                .first()
                .then(resolve)
                .catch(reject);
            return;
        }

        // If a specific version was specified, attempt to fetch that version
        queryCollection('docs')
            .where('repo', '=', repo)
            .where('module', '=', module)
            .where('version', '=', version)
            .first()
            .then(resolve)
            .catch(reject);
    });
}