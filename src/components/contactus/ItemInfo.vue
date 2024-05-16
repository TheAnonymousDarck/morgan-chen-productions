<script setup lang="ts">

const props = defineProps<{
  title: string,
}>()
</script>

<template>
  <div class="flex gap-x-5">
    <slot name="icon" />
    <div class="grow">
      <h4 class="text-white font-semibold">{{ props.title }}:</h4>

      <slot name="content" />

    </div>
  </div>
</template>

<style scoped>

</style>