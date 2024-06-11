<script setup lang="ts">

const props = defineProps<{
  name: string,
  to: string,
}>();

</script>

<template>
  <NuxtLink :to="props.to" class="dropdown__link">
    {{ props.name }}
  </NuxtLink>
</template>

<style scoped>
.dropdown__link {
  @apply hover:bg-gray-900 hover:text-white block px-4 py-2 text-gray-400  text-sm bg-inherit rounded-lg dark:bg-inherit dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:outline;
}
</style>


