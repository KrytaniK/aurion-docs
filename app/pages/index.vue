<template>
  <NuxtLayout name="default">
    <template #header>
      <navbar use-logo page-alt="Docs"/>
    </template>
  </NuxtLayout>

<!--  <ContentRenderer v-if="home" :value="home" />-->
<!--  <div v-else>Home not found</div>-->
</template>

<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>