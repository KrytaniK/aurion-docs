<template>
  <NuxtPage/>
</template>

<script setup lang="ts">
import type { DocsCollectionItem, ContentNavigationItem } from "@nuxt/content"
import { provide } from "vue";
import { resolveDoc } from "~/composables/useDocResolver";

const currentDocument = ref<DocsCollectionItem | null>(null);

const loadDocument = async (repo: string, module: string, version: number | "latest") => {
  currentDocument.value = await resolveDoc(repo, module, version);
}

const { data: contentNavigation } = await useAsyncData(
    'navigation',
    () => queryCollectionNavigation('docs')
);

provide("ContentNavigation", contentNavigation);
provide("Document", {
  currentDocument: currentDocument,
  loadDocument
});
</script>