<script setup lang="ts">

const props = defineProps<{
  href: string,
}>();

// const classes = computed(() => {
//   return props.active
//       ? 'inline-flex items-center px-1 pt-1 border-b-2 border-primary-400 dark:border-primary-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-primary-700 transition duration-150 ease-in-out'
//       : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out';
// });
</script>

<template>
  <NuxtLink :to="props.href" class="nav-link" activeClass="nav-link-active">
    <slot />
  </NuxtLink>
</template>

<style scoped>
.nav-link{
  @apply inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out;
}

.nav-link-active{
  @apply inline-flex items-center px-1 pt-1 border-b-2 border-primary-400 dark:border-primary-600 font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-primary-700 transition duration-150 ease-in-out;
}
</style>
