<template>
  <NuxtLayout name="default">
    <template #header>
      <navbar page-alt="Docs" show-logo />
    </template>
    <template #main>
      <UMain :ui="{ base: 'flex' }">
        <!--  Sidebar  -->
        <sidebar />


      </UMain>
    </template>
    <template #footer>
      <footer>
        <slot name="footer"/>
      </footer>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">

</script>