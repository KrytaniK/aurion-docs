<template>
  <NuxtLayout name="docs-post">
    <!--   Breadcrumb   -->
    <template #breadcrumb>
      <strong class="text-(--mute)">
        Aurion > Docs > {{repo}}
      </strong>
    </template>

    <template #last-updated v-if="currentDocument">
      <strong class="text-(--mute-50)">Last Updated: </strong>
      <strong class="text-(--mute)">{{currentDocument.lastUpdate}}</strong>
    </template>

    <template #post-header v-if="currentDocument">

      <!--   Title   -->
      <h2 class="text-(--text)">{{ currentDocument.title }}</h2>

      <!--   Description   -->
      <p class="text-(--mute)">
        <strong>{{ currentDocument.description }}</strong>
      </p>

      <!--   Tags   -->
      <ul class="list-unstyled flex gap-2 md-text py-2">
        <li
            class="sm-text py-1 px-5 rounded-full border border-(--mute-25) bg-(--mute-10) text-(--mute)"
            v-for="tag in currentDocument.tags"
            key="tag"
        >
          <strong>{{tag}}</strong>
        </li>
      </ul>

      <div
          class="h-0 border-1 border-(--hint) my-4"
      ></div>
    </template>

    <template #post-body v-if="currentDocument">
      <!--   Post Image (If Available)   -->

      <!--   Post Body   -->
      <ContentRenderer class="px-5 py-2 col-span-1 flex flex-col gap-y-6" :value="currentDocument" />
    </template>

    <template #post-toc v-if="currentDocument">
      <!--   Post TOC   -->
      <UContentToc
        :links="currentDocument?.body?.toc?.links"
        :ui="{
          root: 'px-0'
        }"
      />
    </template>
  </NuxtLayout>
</template>

<script setup>
const { params: { repo } } = useRoute();

// Fetch document (only accounts for initial route load, not remounts)
const { data: currentDocument } = await useAsyncData(
    () => queryCollection("docs")
        .where("repo", "=", repo)
        .first()
);

// When the repo changes, the page remounts. Reload document
onMounted(async () => {
  if (currentDocument.value.repo == repo)
    return;

  try {
    currentDocument.value = await queryCollection("docs")
        .where("repo", "=", repo)
        .first();
  } catch (e) {
    console.error(e);
  }
})
</script>