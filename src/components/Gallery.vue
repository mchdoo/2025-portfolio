<template>
  <div class="layout mb-3 border-t"></div>

  <div ref="grid" class="grid grid-cols-3 lg:grid-cols-6 gap-3">
    <a v-for="item in items" :key="item.title" :href="`/gallery/${item.title}`">
      <img
        class="select-none cursor-pointer grid-item relative break-inside-avoid col-span-1 aspect-square object-cover object-center hover:p-1 transition-all"
        @mouseenter="handleHover(item.title)"
        @mouseleave="handleHover(null)"
        loading="lazy"
        :src="item.url + '?w=500&fm=webp'"
        :alt="item.title + ' artwork'"
      />
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define props
const props = defineProps(["items"]);
const current = ref("initial");

function handleHover(title) {
  current.value = title;
}
// This function will only be called on the client side
</script>
