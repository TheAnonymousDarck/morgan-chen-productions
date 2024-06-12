<script setup lang="ts">

const getUpcomingEvents = () => console.log('upcomming events');

</script>

<template>
  <section class="bg-neutral-900">
    <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
      <div class="text-center">
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight capitalize"> Upcoming Events </h2>
        <p class="synopsis__paragraph ">
          At the moment there are no events found 😞
        </p>
      </div>
      <div class="flex justify-center pt-3">
        <button  @click="getUpcomingEvents()" class="btn-primary"> View All Events </button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>