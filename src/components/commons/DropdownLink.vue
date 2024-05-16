<script setup lang="ts">

const props = defineProps<{
  name: string,
  to: string,
}>();

</script>

<template>
  <NuxtLink :to="props.to" class="hover:bg-gray-900 hover:text-white block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
    {{ props.name }}
  </NuxtLink>
</template>


