<template>
  <div class="h-16 px-4 flex gap-4 items-center">
    <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
      <!--  Logo  -->
      <Img v-if="useLogo" src="/favicon-32x32.png" alt="logo" />

      <!--  App Name / Page Alt  -->
      <h6>
        <strong>
          <span class="pr-2 text-(--rust)">AURION</span>
          <span v-if="pageAlt">{{pageAlt}}</span>
        </strong>
      </h6>
    </NuxtLink>

    <!--  Version Pill (Replace with component)  -->
    <div class="px-2 py-1 flex items-center gap-2 text-nowrap xs-text text-(--success) shrink-0 rounded-full bg-(--success-10) border border-(--success-25) opacity-50 pointer-events-none">
      <span><strong>v1.2.0 Stable</strong></span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </div>

    <!--  Navigation Items  -->
    <nav class="w-full h-full flex justify-end items-center">
      <NuxtLink
          v-for="link in navLinks"
          :key="link.text"
          :to="link.url"
          class="px-4 py-2 h-max rounded-md hover:bg-(--rust-25) hover:text-(--honey) transition-colors"
          active-class="text-[var(--honey)]"
      >
        <strong>{{link.text}}</strong>
      </NuxtLink>
    </nav>

    <!--  Search Bar (Replace with component)  -->
    <div class="w-[288px] h-8 flex items-center justify-center gap-2 rounded-md bg-(--faint) text-(--mute) sm-text opacity-25 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 28" stroke-width="3" stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <strong>
        Search Aurion (Ctrl + K)
      </strong>
    </div>

    <!--  GitHub Link  -->
    <NuxtLink
        to="https://www.github.com/KrytaniK/aurion-core"
        class="md-text rounded-md flex items-center gap-3 text-(--text-50) hover:text-(--text) transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
      </svg>
      <strong>GitHub</strong>
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
  defineProps({
    useLogo: Boolean,
    pageAlt: String,
  });

  const navLinks: {text: string, url: string}[] = [
    {
      text: "Overview",
      url: "/",
    },
    {
      text: "Docs",
      url: "/docs",
    },
    {
      text: "Uses",
      url: "/uses",
    },
    {
      text: "Tutorials",
      url: "/blog", // Add a query string to search for tutorial content, or just use /tutorials
    },
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Roadmap",
      url: "/roadmap",
    },
  ];
</script>