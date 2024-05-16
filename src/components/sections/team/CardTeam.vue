<script setup lang="ts">
type sn = 'twitter' | 'facebook' | 'instagram' | 'linkedin';

const props = defineProps<{
  name: string,
  role: string,
  image: string,
  links: { name: sn, url: string }[],
}>() // Props

</script>

<template>
  <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6 ">
    <div class="relative overflow-hidden my-6 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
      <!-- team block -->
      <div class="relative overflow-hidden px-6">
        <img :src="props.image" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" :alt="props.name">
      </div>
      <div class="pt-6 text-center">
        <p class="text-lg leading-normal font-bold mb-1 dark:text-gray-100">{{props.name}}</p>
        <p class="text-gray-500 leading-relaxed font-light dark:text-gray-300">{{ props.role }}</p>
        <!-- social icon -->
        <div class="mt-2 mb-5 space-x-2">
            <a v-for="(link, index) in props.links" :key="index" class="hover:text-primary" :aria-label="`${link.name} Link`" :href="link.url">
              <Icon :name="`mdi:${link.name}`" size="24" />
            </a>

        </div>
      </div>
    </div>
    <!-- end team block -->
  </div>
</template>

<style scoped>

</style>