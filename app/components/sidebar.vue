<template>
  <USidebar
      variant="floating"
      collapsible="offcanvas"
      v-model:open="isOpen"
      :ui="{
        gap: 'h-[calc(100%-var(--ui-header-height))]',
        container: 'top-(--ui-header-height) bottom-0 h-[calc(100%-var(--ui-header-height))] px-[1rem] py-[0.8rem]',
        inner: 'ring ring-(--hint) bg-(--surface-elevated)'
      }"
      :style="{ '--sidebar-width': '352px', '--ui-header-height': '70px' }"
  >
    <div class="w-full flex justify-between items-center py-[0.5rem]">
      <!--  Logo  -->
      <NuxtImg src="/favicon-32x32.png" alt="Logo" width="32" height="32" />

      <!--   Close Icon   -->
      <div
        class="shrink-0 flex items-center align-center absolute transition-all"
        :class="isOpen ? 'right-8' : 'right-[-3.5rem]'"
      >
        <UButton
          :icon="isOpen ? 'fluent-mdl2:double-chevron-left-12' : 'fluent-mdl2:double-chevron-right-12'"
          class="w-[24px] h-[24px] p-4 flex items-center justify-center cursor-pointer border border-(--hint) text-(--text) bg-(--surface-elevated) hover:bg-(--hint)"
          color="neutral"
          variant="ghost"
          aria-label="Toggle Sidebar Navigation"
          @click="isOpen = !isOpen"
          :ui="{
            leadingIcon: 'w-3 h-3'
          }"
        />
      </div>
    </div>

    <!--  Search Bar (Replace with component)  -->
    <div class="w-full h-[32px] flex items-center gap-2 p-[8px] rounded-md bg-(--faint) text-(--mute-50) sm-text pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 28" stroke-width="3" stroke="currentColor" class="size-4 text-(--mute)">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <strong>
        Search Documentation
      </strong>
    </div>

    <!--  Content Navigation  -->
    <UContentNavigation
        :navigation="navigation"
        :default-open="true"
        :hidden="!isOpen"
        :highlight="false"
        highlight-color="primary"
        variant="pill"
        :style="{
          '--ui-primary': 'var(--honey)',
          '--ui-text-highlighted': 'var(--text)',
          '--ui-text-muted': 'var(--mute)',
          '--font-weight-medium': 'bold',
          '--font-weight-semibold': 'bold',
          '--ui-border': 'var(--hint)'
        }"
        :ui="{
          root: 'text-(--text) font-bold',
          content: 'ml-[1.25rem] mr-[0.5rem] mt-[0.25rem]',
          item: 'cursor-pointer ms-0',
          itemWithChildren: 'pb-[0.6rem] rounded-md',
          link: 'p-[0.6rem] rounded',
        }"
    />

    <!--  Resources  -->
    <div class="mt-auto flex flex-col gap-[1rem]">

      <span class="text-(--text) md-text font-bold">Resources</span>

      <!--   Resources Link (Rotate?)   -->
      <NuxtLink
        to="/docs/getting-started"
        class="my-[1rem] flex flex-col gap-[0.5rem] p-[1rem] relative min-h-[5rem] w-full bg-(--hint-10) border border-(--hint) rounded-lg relative"
      >
        <UIcon
          name="tabler:link-filled"
          class="size-6 text-(--aqua) absolute top-[1rem] right-[1rem]"
        />
        <span class="mt-[5rem] text-(--text) font-bold">
          Getting Started
        </span>
        <span class="font-bold md-text text-(--mute)">
          This series will introduce you to Aurion and give you an overview of its features.
        </span>
      </NuxtLink>

      <div class="flex justify-between">
        <NuxtLink
          to="https://github.com/KrytaniK"
          target="_blank"
          class="sm-text font-bold text-(--mute) flex items-center gap-[0.5rem]"
        >
          <UIcon
            name="line-md:github"
            class="size-6"
          />
          GitHub
        </NuxtLink>
        <NuxtLink
          to="/release-notes"
          class="sm-text font-bold text-(--mute) flex items-center gap-[0.5rem]"
        >
          <UIcon
            name="material-symbols:subtitles-gear-rounded"
            class="size-6"
          />
          Release Notes
        </NuxtLink>
      </div>
    </div>
  </USidebar>
</template>

<script setup lang="ts">
import { inject } from "vue";
import type { ContentNavigationItem } from "@nuxt/content";

const isOpen = ref(true);
const contentNavigation = inject<Ref<ContentNavigationItem[]>>("ContentNavigation");
const navigation = computed(() => {
  if (!contentNavigation || !contentNavigation.value) return [];

  const docs: ContentNavigationItem | undefined = Object.values(contentNavigation.value)
      .find((x) => x.title.toLowerCase() === "docs");

  return docs?.children
      ? docs.children
      : [];
});

</script>