<template>
  <div ref="grid" class="grid-pckry">
    <div
      v-for="item in items"
      :key="item._id"
      class="grid-item"
      :class="{ vertical: item.height > item.width }"
    >
      <!-- Render item content -->
      <img :src="item.imageUrl" :alt="item.title + ' artwork'" />
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick } from "vue";
import Packery from "packery";
import Draggabilly from "draggabilly";

export default {
  props: ["items"],
  mounted() {
    // Ensure DOM updates complete before initializing Packery
    var pckry = new Packery(this.$refs.grid, {
      // options
      itemSelector: ".grid-item",
    });
    // init Draggabillies
    pckry.getItemElements().forEach(function (itemElem) {
      var draggie = new Draggabilly(itemElem);
      pckry.bindDraggabillyEvents(draggie);
    });
  },
};
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
