<template>
  <div class="layout mb-2 border-t">
    <p>hovering: « {{ current }} »</p>
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
import { onMounted, ref, watch } from "vue";
import imagesLoaded from "imagesloaded";

// Define props
const props = defineProps(["items"]);
const grid = ref(null);
const current = ref("initial");
let pckry = null;

function handleHover(title) {
  current.value = title;
}

// This function will only be called on the client side
async function initPackery() {
  // Dynamically import Packery and Draggabilly only on the client side
  const { default: Packery } = await import("packery");
  const { default: Draggabilly } = await import("draggabilly");

  // Check if grid ref exists
  if (!grid.value) return;

  // Destroy existing Packery instance if it exists
  if (pckry) {
    pckry.destroy();
  }

  // Initialize new Packery
  pckry = new Packery(grid.value, {
    itemSelector: ".grid-item",
    percentPosition: true,
  });

  // Make items draggable
  const itemElems = pckry.getItemElements();
  if (itemElems && itemElems.length) {
    itemElems.forEach((itemElem) => {
      const draggie = new Draggabilly(itemElem);
      pckry.bindDraggabillyEvents(draggie);
    });
  }
}

onMounted(() => {
  if (props.items && props.items.length && grid.value) {
    imagesLoaded(grid.value, () => {
      initPackery();
    });
  }
});

// Watch for changes in items
watch(
  () => props.items,
  (newItems) => {
    if (newItems && newItems.length) {
      // Use setTimeout to ensure the DOM is updated
      setTimeout(() => {
        initPackery();
      }, 100);
    }
  },
);
</script>
<style>
.grid-pckry {
  width: 100%;
}
.grid-item {
  width: calc(100% / 3);
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .grid-item {
    width: calc(100% / 2);
  }
}
.grid-item.vertical {
  width: calc(100% / 6);
}
@media (max-width: 768px) {
  .grid-item.vertical {
    width: calc(100% / 2);
  }
}
/* Make sure images fit their containers */
.grid-item img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
