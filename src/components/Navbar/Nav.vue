<script setup lang="ts">
const showingNavigationDropdown = ref(false);

const toggleDropdown = () => showingNavigationDropdown.value = ! showingNavigationDropdown.value;

</script>

<template>
  <nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 sticky z-50">
    <!-- Primary Navigation Menu -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="shrink-0 flex items-center">
            <NuxtLink to="/">
              Marca / Logo
<!--              <ApplicationMark class="block h-9 w-auto" />-->
            </NuxtLink>
          </div>
        </div>

          <!-- Navigation Links -->
        <div class="hidden sm:flex ">
          <div class="flex">
            <NavbarNavLink href="/" class="mr-3">Home</NavbarNavLink>
            <NavbarNavLink href="/events" class="mr-3" >Events</NavbarNavLink>
            <NavbarNavLink href="/press" class="mr-3" >Press</NavbarNavLink>
          </div>

          <div class="sm:flex sm:items-center">
            <!-- Team Dropdown -->
            <div class=" relative">
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
                <CommonsDropdownLink href="/team/meet-team">
                  Meet the team
                </CommonsDropdownLink>
                <CommonsDropdownLink href="/team/about-team">
                  About the team
                </CommonsDropdownLink>
<!--                <div class="border-t border-gray-200 dark:border-gray-600" />-->
              </template>
            </CommonsDropdown>
            </div>

            <!-- Contact Dropdown-->
            <div class="relative">
              <CommonsDropdown align="right" width="48">
                <template #trigger>
                <span class="inline-flex rounded-md">
                  <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150">
                    <span>Contact</span>
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
                  <CommonsDropdownLink href="/contact">
                    Contact us
                  </CommonsDropdownLink>
                  <CommonsDropdownLink href="/contact/request-screening">
                    Request a screening
                  </CommonsDropdownLink>
                  <!--                <div class="border-t border-gray-200 dark:border-gray-600" />-->
                </template>
              </CommonsDropdown>
            </div>
          </div>

        </div>

        <!-- Hamburger -->
        <div class="-me-2 flex items-center sm:hidden">
          <button class="hamburger-btn" @click="toggleDropdown()">
            <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                  :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <NavbarResponsive :show="showingNavigationDropdown"/>
  </nav>
</template>

<style scoped>
.hamburger-btn {
  @apply inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out;
}
</style>