<template>
  <div
      v-if="isActive"
      class="p-2 bg-(--faint) border border-(--hint) rounded-lg w-min max-w-full"
  >
    <div class="flex items-center justify-between gap-2">
      <!--   Tabs   -->
      <div class="bg-(--surface-elevated) grow flex items-center justify-between p-2 rounded-tl-lg">
        <ul class="flex items-center gap-2 w-min">
          <li
            v-for="tab in allTabs"
            key="tab"
          >
            <button
              type="button"
              class="px-2 py-1 rounded-md cursor-pointer transition-all"
              :class="{
                'bg-(--honey-10) text-(--honey)': activeTab === tab,
                'text-(--mute-50) hover:bg-(--honey-25) hover:text-(--honey)': activeTab !== tab,
              }"
              @click="activeTab = tab"
            >
              <strong>{{tab}}</strong>
            </button>
          </li>
        </ul>
        <span class="text-(--hint)">
          <strong>
            {{language}}
          </strong>
        </span>
      </div>

      <!--   Actions   -->
      <div class="bg-(--surface-elevated) px-5 py-2 h-full rounded-tr-lg">
        <!--   Copy to Clipboard   -->
        <!--   Expand (send to modal)   -->
        asdf
      </div>
    </div>
    <pre :class="props.class" class="mt-2 px-6 bg-(--surface-elevated) rounded-b-lg max-h-96 overflow-auto">
      <slot />
    </pre>
  </div>
</template>

<script setup lang="ts">
import {useCodeGroup} from "~/composables/useCodeGroup";

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const group = computed(() => {
  const match = props.meta?.match(/group=(\S+)/);
  return match ? match[1] : null;
});

const language = computed(() => {
  const match = props.meta?.match(/language=(\S+)/);
  return match ? match[1] : null;
});

const { activeTab, allTabs, register } = group.value
    ? useCodeGroup(group.value)
    : { activeTab: ref(props.filename), allTabs: [], register: () => {} }

const isActive = computed(() => activeTab.value === props.filename);

onMounted(() => register(props.filename));
</script>