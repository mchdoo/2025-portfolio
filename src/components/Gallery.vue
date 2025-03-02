<template>
  <div class="layout mb-2 border-t">
    <p>hoverig: « {{ current }} »</p>
  </div>
  <div ref="grid" class="grid-pckry">
    <div
      v-for="item in items"
      :key="item._id"
      class="grid-item"
      :class="{ vertical: item.height > item.width }"
      @mouseenter="handleHover(item.title)"
      @mouseleave="handleHover(null)"
    >
      <!-- Render item content -->
      <img :src="item.imageUrl" :alt="item.title + ' artwork'" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, nextTick, ref } from "vue";
import Packery from "packery";
import Draggabilly from "draggabilly";

const { items } = defineProps(["items"]);

const grid = ref(null);
const current = ref("initial");

function handleHover(title) {
  current.value = title;
}

function initPackery() {
  nextTick(() => {
    if (!grid.value) return;
    const pckry = new Packery(grid.value, {
      itemSelector: ".grid-item",
    });
    pckry.getItemElements().forEach((itemElem) => {
      const draggie = new Draggabilly(itemElem);
      pckry.bindDraggabillyEvents(draggie);
    });
  });
}

onMounted(() => {
  watch(
    () => items,
    (newItems) => {
      if (newItems && newItems.length) {
        initPackery();
      }
    },
    { immediate: true },
  );
});
</script>

<style>
.grid-pckry {
  display: grid;
}

.grid-item {
  width: calc(100% / 3);

  @media (max-width: 768px) {
    width: calc(100% / 2);
  }

  &.vertical {
    width: calc(100% / 6);

    @media (max-width: 768px) {
      width: calc(100% / 2);
    }
  }
}
</style>
