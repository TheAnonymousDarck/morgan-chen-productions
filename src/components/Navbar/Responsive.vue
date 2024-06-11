<script setup lang="ts">
const props = defineProps<{ show:  boolean }>();
</script>

<template>
  <div :class="{'block': props.show, 'hidden': ! props.show}" class="sm:hidden">
    <!-- Responsive Links -->
    <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
      <div class="mt-3 space-y-1">
        <NavbarResponsiveNavLink href="/" class="mr-3">Home</NavbarResponsiveNavLink>
        <NavbarResponsiveNavLink href="/events" class="mr-3" >Events</NavbarResponsiveNavLink>
        <NavbarResponsiveNavLink href="/press" class="mr-3" >Press</NavbarResponsiveNavLink>
      </div>
    </div>

    <!-- Team Section -->
    <div>
      <div class="border-t border-gray-200 dark:border-gray-600" />
      <span class="block px-4 py-2 text-xs text-gray-400"> Team </span>
      <NavbarResponsiveNavLink href="/team/meet-team"> Meet the team </NavbarResponsiveNavLink>
      <NavbarResponsiveNavLink href="/team/about-team"> About the team </NavbarResponsiveNavLink>
    </div>

    <!-- Contact Section -->
    <div>
      <div class="border-t border-gray-200 dark:border-gray-600" />
      <span class="block px-4 py-2 text-xs text-gray-400"> Contact </span>
      <NavbarResponsiveNavLink href="/contact"> Contact us </NavbarResponsiveNavLink>
      <NavbarResponsiveNavLink href="/contact/request-screening"> Request a screening </NavbarResponsiveNavLink>
    </div>
  </div>
</template>