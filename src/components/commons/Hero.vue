<script setup lang="ts">
const props = defineProps<{ img: string }>();
</script>

<template>
  <div
      class="h-screen bg-neutral-600 opacity-80 flex items-center bg-cover bg-center py-32 w-full"
      :style="{ backgroundImage: `url(${props.img})` }"
  >
    <slot />
  </div>
</template>
