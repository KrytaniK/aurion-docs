<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>Page not found</div>
</template>

<script setup>
const route = useRoute();

// Attempt to fetch Markdown content for the page
const { data: page } = await useAsyncData(() => queryCollection('content').path(route.path).first())

// If this fails, or content doesn't exist, redirect to 404

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>