<template>
  <CommonsHero img="https://source.unsplash.com/random">
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
            <NuxtLink to="/team/about-team" class="btn-primary">Meet the team</NuxtLink>
          </div>
          <div class="w-1/2 pl-16">
            <img src="https://source.unsplash.com/random?ux" class="h-64 w-full object-cover rounded-xl" alt="Layout Image">
          </div>
        </div>
      </div>
    </section>
  </CommonsHero>
</template>