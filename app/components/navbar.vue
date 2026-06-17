<template>
  <UHeader
      to="/"
      class="h-20"
      :ui="{
        root: 'bg-(--surface-elevated-75) backdrop-blur-lg border-none',
        container: 'max-w-full w-full m-0 p-0 flex items-center',
        title: 'flex items-center gap-4',
      }"
  >
    <template #title>
      <!--  Logo  -->
      <NuxtImg v-if="showLogo" src="/favicon-32x32.png" alt="Logo" width="32" height="32" />

      <!--  App Name / Page Alt  -->
      <h5>
        <span class="pr-2 text-(--rust)">AURION</span>
        <span v-if="pageAlt">{{pageAlt}}</span>
      </h5>

      <!--  Version Pill  -->

      <!--  Search Bar (Replace with component)  -->
      <div class="w-[12rem] h-8 flex items-center justify-center gap-2 rounded-md bg-(--faint) border border-(--mute) text-(--mute) sm-text opacity-50 pointer-events-none">
        <strong>
          Search Aurion (Ctrl + K)
        </strong>
      </div>
    </template>

    <template #right>
      <!--   Navigation Links   -->
      <nav class="w-full h-full flex items-center justify-end">
        <NuxtLink
            v-for="link in navLinks"
            :key="link.text"
            :to="link.url"
            class="px-4 py-2 h-max rounded-md hover:bg-(--hint-25) hover:text-(--honey) transition-colors"
            active-class="text-(--honey)"
        >
          <strong>{{link.text}}</strong>
        </NuxtLink>
      </nav>

      <!--  GitHub Link  -->
      <NuxtLink
          to="https://www.github.com/KrytaniK"
          class="md-text rounded-md flex items-center gap-3 text-(--text-50) hover:text-(--text) transition-colors"
      >
        <UIcon
            name="line-md:github"
            class="size-6"
        />
        <strong>GitHub</strong>
      </NuxtLink>
    </template>


    <!--  Navigation Items  -->
  </UHeader>
</template>

<script setup lang="ts">
  defineProps({
    showLogo: { type: Boolean, required: false },
    showVersionPill: { type: Boolean, required: false },
    pageAlt: { type: String, required: false },
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
      text: "Release Notes",
      url: "/release-notes",
    },
  ];
</script>