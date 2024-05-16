<script setup lang="ts">


const getGuide = () => console.log('Get Guide');
</script>

<template>
  <section class="bg-neutral-900">
    <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
      <div class="">
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight capitalize">a consent calendar resource </h2>
        <p class="synopsis__paragraph ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="flex justify-center pt-3">
          <button  @click="getGuide()" class="btn-primary ">Get Guide!</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>