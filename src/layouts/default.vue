<template>
  <div>
    <Toaster  richColors  />
    <div class="min-h-screen antialiased bg-gif">
      <NavbarNav />
      <main>
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import {Toaster} from "vue-sonner";
</script>