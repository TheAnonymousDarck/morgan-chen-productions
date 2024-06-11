<script setup lang="ts">
const open = ref<boolean>(false);

const toggleNav = () => open.value = !open.value;
</script>

<template>
  <div class="sticky bg-primary-500 z-50">
    <nav class="flex items-center bg-gray-800 p-3 flex-wrap">

      <NuxtLink class="text-white p-2 mr-4 inline-flex items-center" to="/" aria-label="Logo">Logo</NuxtLink>
      <button class="text-white inline-flex p-3 hover:bg-primary-900 rounded lg:hidden ml-auto hover:text-white outline-none" @click="toggleNav">
        <Icon name="material-symbols:menu-rounded" size="24"/>
      </button>

      <div class="inline-flex w-full lg:inline-flex lg:flex-grow lg:w-auto" :class="{ 'hidden ': !open }">
        <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">

          <NuxtLink class="link__nav" to="/" >Home</NuxtLink>
          <NuxtLink class="link__nav" to="/events" >Events</NuxtLink>
          <NuxtLink class="link__nav" to="/press" >Press</NuxtLink>
          <div class="ms-3 relative">
            <CommonsDropdown align="right" width="48">
              <template #trigger>
                <span class="inline-flex rounded-md">
                  <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150">
                    <span>Team</span>
                    <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </span>
              </template>

              <template #content>
                <!-- Account Management -->
<!--                <div class="block px-4 py-2 text-xs text-gray-400">-->
<!--                  Manage Account-->
<!--                </div>-->

                <CommonsDropdownLink href="/team/meet-team">
                  Meet the team
                </CommonsDropdownLink>

                <CommonsDropdownLink href="/team/about-team">
                  About the team
                </CommonsDropdownLink>

                <div class="border-t border-gray-200 dark:border-gray-600" />

              </template>
            </CommonsDropdown>
          </div>
<!--          <CommonsDropdown title="Team">-->
<!--            <CommonsDropdownLink name="Meet the team" to="/team/meet-team"/>-->
<!--            <CommonsDropdownLink name="About the team" to="/team/about-team" />-->
<!--          </CommonsDropdown>-->
<!--          <CommonsDropdown title="Contact">-->
<!--            <CommonsDropdownLink name="Contact us" to="/contact"/>-->
<!--            <CommonsDropdownLink name="Request a screening" to="/contact/request-screening"/>-->
<!--          </CommonsDropdown>-->
<!--          <NuxtLink class="link__nav" to="/team/meet-team">Meet the team</NuxtLink>-->
<!--          <NuxtLink class="link__nav" to="/team/about-team">About the team</NuxtLink>-->
<!--          <NuxtLink class="link__nav" to="/contact/request-screening">Request a screening</NuxtLink>-->
<!--          <NuxtLink class="link__nav" to="/contact">Contact us</NuxtLink>-->
<!--          <CommonsDropdown title="Team" #default="{ closeDropdown }">-->
<!--            <CommonsDropdownLink name="Meet the team" to="/team/meet-team"/>-->
<!--            <CommonsDropdownLink name="About the team" to="/team/about-team" />-->
<!--          </CommonsDropdown>-->
<!--          <CommonsDropdown title="Contact" #default="{ closeDropdown }">-->
<!--            <CommonsDropdownLink name="Contact us" to="/contact"/>-->
<!--            <CommonsDropdownLink name="Request a screening" to="/contact/request-screening"/>-->
<!--          </CommonsDropdown>-->

        </div>
      </div>

    </nav>
  </div>
</template>

<style scoped>
.link__nav{
  @apply lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-inherit hover:text-white transition duration-150 ease-in-out;
}

</style>
