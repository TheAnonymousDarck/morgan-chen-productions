<script setup lang="ts">

const contactData = {
  address: {
    street: '123 Main St.',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    country: 'USA',
  },
  email: 'example@site.co',
  phone: '123 456 7890',
  social: {
    twitter: 'example',
    facebook: 'example',
    instagram: 'example',
  },
}

</script>

<template>
  <!-- Contact -->
  <div class="bg-neutral-900">
    <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
      <!-- Title -->
      <div class="max-w-3xl mb-10 lg:mb-14">
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact information</h2>
        <p class="mt-1 text-neutral-400">Whatever your goal - we will get you there.</p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
        <div class="space-y-14">

            <!-- Item -->
            <ContactusItemInfo title="Our address">
              <template #icon>
                <Icon name="ph:map-pin" size="28" class="text-primary-500 " />
              </template>
              <template #content>
                <address class="mt-1 text-neutral-400 text-sm not-italic">
                  {{ contactData.address.street }} <br> {{ contactData.address.city }} <br>
                  {{ contactData.address.state }} , {{ contactData.address.country }} {{ contactData.address.zipCode }}
                  <!--                300 Bath Street, Tay House<br>-->
                  <!--                Glasgow G2 4JR, United Kingdom-->
                </address>
              </template>
            </ContactusItemInfo>
            <!-- End Item -->

            <!-- Item -->
            <ContactusItemInfo title="Email us">
              <template #icon>
                <Icon name="ph:envelope" size="28" class="text-primary-500 " />
              </template>
              <template #content>
                <a class="mt-1 text-neutral-400 text-sm" :href="`#mailto:${contactData.email}`" target="_blank">
                  {{ contactData.email }}
                </a>
              </template>
            </ContactusItemInfo>
            <!-- End Item -->

            <!-- Item -->
            <ContactusItemInfo title="Phone">
              <template #icon>
                <Icon name="ph:phone" size="28" class="text-primary-500 " />
              </template>
              <template #content>
                <p><a :href="`tel:+${contactData.phone}`" class="mt-1 text-neutral-400 text-sm">+{{ contactData.phone }}</a></p>
              </template>
            </ContactusItemInfo>
            <!-- End Item -->
          </div>
        <!-- End Col -->
        <div class="space-y-14">
          <ContactusItemInfo title="Our social networks">
            <template #icon>
              <Icon name="tabler:social" size="28" class="text-primary-500 " />
            </template>
            <template #content>
              <div class="social__networks__icons my-4">
                <!--FACEBOOK ICON-->
                <div
                    class="border hover:bg-[#1877f2] w-12 h-12 fill-[#1877f2] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                  >
                    <path
                        d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                    ></path>
                  </svg>
                </div>
                <!--TWITTER ICON-->
                <div
                    class="border hover:bg-[#1d9bf0] w-12 h-12 fill-[#1d9bf0] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                  >
                    <path
                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                    ></path>
                  </svg>
                </div>
                <!--INSTAGRAM ICON-->
                <div
                    class="border hover:bg-[#bc2a8d] w-12 h-12 fill-[#bc2a8d] hover:fill-white border-pink-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-pink-500/50 cursor-pointer"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                  >
                    <path
                        d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"
                    ></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path
                        d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                    ></path>
                  </svg>
                </div>

                <!--WHATSAPP ICON-->
                <div
                    class="border hover:bg-[#25D366] w-12 h-12 fill-[#25D366] hover:fill-white border-green-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 cursor-pointer"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                  >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                    ></path>
                  </svg>
                </div>

                <!--TELEGRAM ICON-->
                <div
                    class="border hover:bg-[#229ED9] w-12 h-12 fill-[#229ED9] hover:fill-white border-sky-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                  >
                    <path
                        d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
                    ></path>
                  </svg>
                </div>
              </div>
            </template>
          </ContactusItemInfo>

          <ContactusItemInfo title="More">
            <template #icon>
              <Icon name="ri:more-line" size="28" class="text-primary-500 " />
            </template>
            <template #content>
              <div>
                <p class="mt-1 text-neutral-400 text-md not-italic">Do you have an idea? we can make it a reality!</p>
                <NuxtLink to="/contact/request-screening" class="text-primary-500 text-sm ml-3">
                  <Icon name="hugeicons:camera-video" size="20" class="text-primary-500 " />
                  Request a screening here!
                </NuxtLink>
                <p class="mt-1 text-neutral-400 text-md not-italic">Do you want more information? Feel free to contact us anytime</p>
                <NuxtLink to="/contact/" class="text-primary-500 text-sm ml-3">
                  <Icon name="ri:mail-send-line" size="20" class="text-primary-500 " />
                  Contact us here!
                </NuxtLink>
              </div>
            </template>
          </ContactusItemInfo>
        </div>
      </div>
        <!-- End Col -->

      <!-- End Grid -->
    </div>
  </div>
  <!-- End Contact -->
</template>

<style scoped>
.social__networks__icons {
  @apply flex gap-x-5 mt-1;
}
</style>