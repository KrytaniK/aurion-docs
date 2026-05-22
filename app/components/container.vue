<template>
  <div ref="container">
    <slot/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  padding: { type: String, required: false },
  paddingX: { type: String, required: false },
  paddingLeft: { type: String, required: false },
  paddingRight: { type: String, required: false },
  paddingY: { type: String, required: false },
  paddingTop: { type: String, required: false },
  paddingBottom: { type: String, required: false },

  margin: { type: String, required: false },
  marginX: { type: String, required: false },
  marginLeft: { type: String, required: false },
  marginRight: { type: String, required: false },
  marginY: { type: String, required: false },
  marginTop: { type: String, required: false },
  marginBottom: { type: String, required: false },
});

const container = ref<HTMLElement | null>(null);

const ApplyPadding = (element: HTMLElement) => {
  // Priority: full (.padding) -> Axis (.padding[X/Y]) -> Side (.padding[Left/Right/Top/Bottom])
  // .paddingLeft or .paddingRight takes precedence over .paddingX; Similar for Y axis
  // .paddingX or .paddingY takes precedence over .padding

  element.style.paddingLeft = props.padding + 'px';
  element.style.paddingRight = props.padding + 'px';
  element.style.paddingTop = props.padding + 'px';
  element.style.paddingBottom = props.padding + 'px';

  element.style.paddingLeft = props.paddingX + 'px';
  element.style.paddingLeft = props.paddingLeft + 'px';
  element.style.paddingRight = props.paddingX + 'px';
  element.style.paddingRight = props.paddingRight + 'px';

  element.style.paddingTop = props.paddingY + 'px';
  element.style.paddingTop = props.paddingTop + 'px';
  element.style.paddingBottom = props.paddingY + 'px';
  element.style.paddingBottom = props.paddingBottom + 'px';
}

const ApplyMargin = (element: HTMLElement) => {
  // Priority: full (.margin) -> Axis (.margin[X/Y]) -> Side (.margin[Left/Right/Top/Bottom])
  // .marginLeft or .marginRight takes precedence over .marginX; Similar for Y axis
  // .marginX or .marginY takes precedence over .margin

  element.style.marginLeft = props.margin + 'px';
  element.style.marginRight = props.margin + 'px';
  element.style.marginTop = props.margin + 'px';
  element.style.marginBottom = props.margin + 'px';

  element.style.marginLeft = props.marginX + 'px';
  element.style.marginLeft = props.marginLeft + 'px';
  element.style.marginRight = props.marginX + 'px';
  element.style.marginRight = props.marginRight + 'px';

  element.style.marginTop = props.marginY + 'px';
  element.style.marginTop = props.marginTop + 'px';
  element.style.marginBottom = props.marginY + 'px';
  element.style.marginBottom = props.marginBottom + 'px';
}

onMounted(() => {
  if (!container.value) return;

  ApplyPadding(container.value);
  ApplyMargin(container.value);
});
</script>