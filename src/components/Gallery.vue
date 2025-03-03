<template>
  <div class="layout mb-3 border-t"></div>

  <div ref="grid" class="columns-2 md:columns-3 lg:columns-4 gap-3">
    <img
      v-for="item in items"
      :key="item._id"
      class="grid-item relative break-inside-avoid mb-3"
      :class="{ 'col-span-2': item.width > item.height }"
      @mouseenter="handleHover(item.title)"
      @mouseleave="handleHover(null)"
      :src="item.imageUrl"
      :alt="item.title + ' artwork'"
    />
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
