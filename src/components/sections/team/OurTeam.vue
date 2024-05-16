<script setup lang="ts">

import CardTeamOpc1 from "~/components/sections/team/CardTeam.vue";

const links =[
  { name: 'twitter', url: '#' },
  { name: 'facebook', url: '#' },
  { name: 'instagram', url: '#' },
  { name: 'linkedin', url: '#' },
];

const data = [
  {
    name: 'Joe Antonio',
    role: 'Founder & CEO',
    image: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png',
    links: links
  },
  {
    name: 'Sarah Daeva',
    role: 'Marketing',
    image: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png',
    links: links
  },
  {
    name: 'Daniel Emo',
    role: 'Sales manager',
    image: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png',
    links: links
  },
  {
    name: 'Toni Lana',
    role: 'UI/UX Designer',
    image: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png',
    links: links
  },
];

</script>

<template>
  <!-- component -->
  <section class="bg-neutral-900">
    <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
      <!-- section header -->
      <div class="text-center mx-auto mb-12">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
          <span class="font-light">Our</span> Team
        </h2>
      </div>
      <!-- end section header -->
      <!-- row -->
      <div class="flex flex-wrap flex-row -mx-4 justify-center">
        <CardTeam v-for="(item, index) in data" :key="index" :name="item.name" :role="item.role" :image="item.image" :links="item.links" />
        <CardTeam v-for="(item, index) in data" :key="index" :name="item.name" :role="item.role" :image="item.image" :links="item.links" />
        <CardTeam v-for="(item, index) in data" :key="index" :name="item.name" :role="item.role" :image="item.image" :links="item.links" />
        <CardTeam v-for="(item, index) in data" :key="index" :name="item.name" :role="item.role" :image="item.image" :links="item.links" />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>