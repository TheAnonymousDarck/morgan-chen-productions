<script setup lang="ts">

</script>

<template>
  <section class="bg-neutral-900">
    <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
      <div class="">
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight capitalize"> Past Events </h2>
        <p class="synopsis__paragraph ">
          Here you have all our past events! 📽️
        </p>
      </div>
      <div class=" pt-3">
        <div class="flex flex-col w-full pt-3 gap-y-2">
          <CardsEventInfo v-for="(item, index) in 10" :key="index"/>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-3 gap-2">
          <CardsEventInfo2 v-for="(item, index) in 10" :key="index"/>
<!--          <CardsEventInfo2 />-->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>