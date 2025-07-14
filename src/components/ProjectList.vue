<template>
  <section class="layout mt-6" x-data="{ isOpen: true }">
    <div
      v-for="(item, index) in projects"
      class="layout border-t pt-3"
      x-on:click="isOpen = !isOpen"
      :key="item.title"
    >
      <p class="col-span-1"># {{ index }}</p>
      <p class="lg:col-span-3 col-span-3 mb-4 lg:mb-0 text-xl font-bold">
        {{ item.title }}
      </p>

      <div class="mb-4 flex-col col-span-2 col-start-5 hidden lg:flex">
        <p>Links:</p>
        <a
          class="text-blue-500 italic"
          v-for="link in item.links"
          :href="link.url"
          target="_blank"
        >
          <<
          {{ link.label }}
          >>
        </a>
      </div>

      <div
        class="col-start-2 lg:col-start-2 lg:col-span-3 col-span-4"
        x-collapse
        x-show="isOpen"
        x-collapse.duration.1000ms
      >
        <div class="mb-2 flex flex-col visible lg:hidden">
          <p>Links:</p>
          <a
            class="text-blue-500 italic"
            v-for="link in item.links"
            :href="link.url"
            target="_blank"
          >
            <<
            {{ link.label }}
            >>
          </a>
        </div>
        <div class="md:columns-2 mb-4 space-y-2">
          <PortableText :value="item.description" />
        </div>

        <div class="mb-4">
          <ul class="inline-flex gap-2">
            <li v-for="tag in item.type" class="bg-gray-100 p-1">#{{ tag }}</li>
          </ul>
        </div>
      </div>

      <div
        class="col-span-full flex flex-row overflow-x-scroll gap-2 snap-x snap-mandatory"
      >
        <img
          v-for="image in item.image"
          className="md:w-1/2 lg:w-1/3 w-5/4 p-2 bg-neutral-100  shadow-inner snap-center"
          :src="image.url"
          alt="Project Image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { PortableText } from "@portabletext/vue";
import { ref } from "vue";

const props = defineProps(["projects"]);
</script>
