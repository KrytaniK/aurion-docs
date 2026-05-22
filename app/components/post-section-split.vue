<template>
  <div class="grid grid-cols-[1fr_1fr] gap-4">
    <div class="min-w-0">
      <slot name="default"/>
    </div>
    <div class="min-w-0">
      <slot name="right"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>