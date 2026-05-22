<template>
  <NuxtLayout name="default">
    <template #header>
      <navbar page-alt="Docs" show-logo show-version-pill />
    </template>
    <template #main>
      <UMain :ui="{ base: 'flex' }">
        <!--  Sidebar  -->
        <sidebar />

        <!--  Post Body Container  -->
        <div class="py-5 px-18 gap-y-6 grow">
          <!--     Breadcrumbs / Last Updated     -->
          <div class="flex justify-between items-center w-full">
            <div class="justify-start items-center">
              <slot name="breadcrumb"/>
            </div>
            <div class="justify-self-end items-center">
              <slot name="last-updated"/>
            </div>
          </div>

          <!--     Post Header     -->
          <div class="flex flex-col gap-y-[16px]">
            <slot name="post-header"/>
          </div>

          <slot name="post-body"/>
          <slot name="post-toc"/>
        </div>
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