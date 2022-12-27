<script lang="ts" setup>
</script>

<template>
  <div class="pt-16 pb-24">
    <h1 class="text-5xl text-center mb-6 font-medium">
      Welcome to All Chords
    </h1>
    <p class="text-xl text-center mb-16">
      A collection of Guitar, Piano, and Ukulele chords
    </p>
    <div class="grid lg:hidden grid-cols-1 gap-4 w-full">
      <div class="relative py-4  bg-yellow-100 flex-grow mx-2 hover:bg-yellow-400 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-yellow-400 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
        <NuxtLink to="/guitar-chords">
          <div class="flex justify-center items-center flex-col">
            <Icon name="mdi:guitar-electric" class="text-8xl" />
            <h1 class="text-2xl mt-4">
              Guitar chords
            </h1>
          </div>
        </NuxtLink>
      </div>
      <div class="relative py-4  bg-green-100 flex-grow mx-2 hover:bg-green-400 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-green-400 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
        <NuxtLink to="/piano-chords">
          <div class="flex justify-center items-center flex-col">
            <Icon name="icon-park-solid:piano" class="text-8xl" />
            <h1 class="text-2xl mt-4">
              Piano chords
            </h1>
          </div>
        </NuxtLink>
      </div>
      <div class="relative py-4 bg-blue-100 flex-grow mx-2 hover:bg-blue-400 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-blue-400 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
        <NuxtLink to="/ukulele-chords">
          <div class="flex justify-center items-center flex-col">
            <Icon name="fluent:guitar-16-filled" class="text-8xl" />
            <h1 class="text-2xl mt-4">
              Ukulele chords
            </h1>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- Desktop Component -->
    <div class="hidden lg:flex">
      <div class="relative py-4  bg-yellow-100 flex-grow mx-2 hover:bg-yellow-400 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-yellow-400 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
        <NuxtLink to="/guitar-chords">
          <div class="flex justify-center items-center flex-col ">
            <Icon name="mdi:guitar-electric" class="text-8xl" />
            <h1 class="text-2xl mt-4">
              Guitar chords
            </h1>
          </div>
        </NuxtLink>
      </div>
      <div class="relative py-4  bg-green-100 flex-grow mx-2 hover:bg-green-400 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-green-400 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
        <NuxtLink to="/piano-chords">
          <div class="flex justify-center items-center flex-col">
            <Icon name="icon-park-solid:piano" class="text-8xl" />
            <h1 class="text-2xl mt-4">
              Piano chords
            </h1>
          </div>
        </NuxtLink>
      </div>
      <div class="relative py-4 bg-blue-100 flex-grow mx-2 hover:bg-blue-400 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-blue-400 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
        <NuxtLink to="/ukulele-chords">
          <div class="flex justify-center items-center flex-col">
            <Icon name="fluent:guitar-16-filled" class="text-8xl" />
            <h1 class="text-2xl mt-4">
              Ukulele chords
            </h1>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
