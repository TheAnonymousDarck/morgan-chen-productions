<script setup lang="ts">
import {toast} from "vue-sonner";

const onSubmitNewsletter = () => {
  console.log('envbiado');
  toast.success('ready! you already belong to our newsletter', );
}

</script>

<template>
  <form class="flex gap-3 p-4" @submit.prevent="onSubmitNewsletter()">
    <div class="flex flex-col">
      <label for="name" class="label__input">Name</label>
      <input type="text" id="name" name="name" class="">
    </div>
    <div class="flex flex-col">
      <label for="lastname" class="label__input">Last Name</label>
      <input type="text" id="lastname" name="lastname">
    </div>
    <div class="flex flex-col">
      <label for="email" class="label__input">Email</label>
      <input type="email" id="email" name="email">
    </div>
    <div class="flex items-end">
      <button type="submit" class="btn-primary-sm">Submit</button>
    </div>
  </form>
</template>

<style scoped>
.label__input {
  @apply text-sm font-medium text-gray-300;
}

input {
  @apply border border-gray-300 text-gray-800 rounded-lg p-2;
}
</style>