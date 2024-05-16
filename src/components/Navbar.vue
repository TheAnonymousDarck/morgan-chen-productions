<script setup lang="ts">
import { ref } from 'vue';

const open = ref<boolean>(false);

const toggleNav = () => {
  open.value = !open.value;
}
</script>

<template>
  <div class="sticky bg-primary-500">
    <nav class="flex items-center bg-gray-800 p-3 flex-wrap">

      <NuxtLink class="text-white p-2 mr-4 inline-flex items-center" to="/" aria-label="Logo">Logo</NuxtLink>
      <button class="text-white inline-flex p-3 hover:bg-primary-900 rounded lg:hidden ml-auto hover:text-white outline-none" @click="toggleNav">
        <Icon name="material-symbols:menu-rounded" size="24"/>
      </button>

      <div class="inline-flex w-full lg:inline-flex lg:flex-grow lg:w-auto" :class="{ 'hidden ': !open }">
        <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">

          <NuxtLink class="link__nav" to="/">Home</NuxtLink>
          <NuxtLink class="link__nav" to="/events">Events</NuxtLink>
          <NuxtLink class="link__nav" to="/press">Press</NuxtLink>
          <NuxtLink class="link__nav" to="/team/meet-team">Meet the team</NuxtLink>
          <NuxtLink class="link__nav" to="/team/about-team">About the team</NuxtLink>
          <NuxtLink class="link__nav" to="/contact/request-screening">Request a screening</NuxtLink>
          <NuxtLink class="link__nav" to="/contact">Contact us</NuxtLink>
          <CommonsDropdown title="Link 1">
            <CommonsDropdownLink name="meet the team" to="/team/meet-team"/>
          </CommonsDropdown>

        </div>
      </div>

    </nav>
  </div>
</template>

<style scoped>
.link__nav{
  @apply lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white;
}
</style>
