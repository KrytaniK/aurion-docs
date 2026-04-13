<template>
  <header>
    <slot name="header"/>
  </header>
  <main>
    <div class="w-full h-full">
      <slot name="hero"/>
    </div>
    <slot name="content"/>
  </main>
  <footer>
    <slot name="footer"/>
  </footer>
</template>

<script setup lang="ts">

</script>