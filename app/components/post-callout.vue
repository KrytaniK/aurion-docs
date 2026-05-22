<template>
  <div class="w-full flex items-center">
    <div :class="classes">
      <strong>
        <slot/>
      </strong>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: { type: String, required: false },
});

const classes = computed(() => ({
  'md-text w-[512px] h-max-[96px] p-4': true,
  'bg-(--aqua-10) text-(--aqua) border-l-2 border-(--aqua) rounded-md': props.type == "info",
  'bg-(--warning-10) text-(--warning) border-l-2 border-(--warning) rounded-md': props.type == "warning",
  'bg-(--success-10) text-(--success) border-l-2 border-(--success) rounded-md': props.type == "success",
  'bg-(--error-10) text-(--error) border-l-2 border-(--error) rounded-md': props.type == "error",
}));


</script>