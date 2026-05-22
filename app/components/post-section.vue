<template>
  <div :id="name">
    <span ref="titleContainer"></span>
    <slot/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: false },
  level: { type: String, required: false },
});

const titleContainer = ref<HTMLElement | null>(null);

const CreateHeading = (container: HTMLElement) => {
  let newHeading;
  switch (props.level) {
    case "0": {
      newHeading = document.createElement('h3');
      break;
    }
    case "1": {
      newHeading = document.createElement('h4');
      break;
    }
    case "2": {
      newHeading = document.createElement('h5');
      break;
    }
    case "3": {
      newHeading = document.createElement('h6');
      break;
    }
    default: {
      newHeading = document.createElement('h3');
      break;
    }
  }

  newHeading.textContent = props.name ?? "";
  container.appendChild(newHeading);
};

onMounted(() => {
  if (titleContainer.value && props.name)
    CreateHeading(titleContainer.value);
});
</script>