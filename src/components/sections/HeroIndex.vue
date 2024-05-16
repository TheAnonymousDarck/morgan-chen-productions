<script setup lang="ts">

</script>

<template>
  <div class="h-screen bg-neutral-600 opacity-80 flex items-center bg-cover bg-center py-32 w-full" style="background-image: url('https://source.unsplash.com/random');">
    <section class="bg-cover bg-center py-32 w-full">
<!--      <section class="bg-cover bg-center py-32 w-full" style="background-image: url('https://source.unsplash.com/random');">-->
      <div class="container mx-auto text-left text-white max-w-5xl px-4 xl:px-0 py-10 lg:py-20">
        <div class="flex items-center">
          <div class="w-1/2">
            <h1 class="text-5xl font-medium mb-6 text-white">Welcome to Morgan Chen Productions</h1>
            <p class="text-xl mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
              euismod odio, gravida pellentesque urna varius vitae.
            </p>
            <NuxtLink to="/team/about-team" class="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Meet the team</NuxtLink>
          </div>
          <div class="w-1/2 pl-16">
            <img src="https://source.unsplash.com/random?ux" class="h-64 w-full object-cover rounded-xl" alt="Layout Image">
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped>

</style>