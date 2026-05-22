<template>
  <NuxtLayout name="default">
    <template #header>
      <navbar page-alt="Docs" show-logo />
    </template>
    <template #main>
      <main class="grid grid-cols-2 max-h-screen">

      </main>
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