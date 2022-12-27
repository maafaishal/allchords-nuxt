<script lang="ts" setup>
</script>

<template>
  <div class="pt-12 pb-16 flex">
    <div class="py-4  bg-gray-100 flex-grow mx-2 ">
      <NuxtLink to="/guitar-chords">
        <div class="flex justify-center items-center flex-col">
          <Icon name="mdi:guitar-electric" class="text-8xl" />
          <h1 class="text-2xl font-medium mt-4">
            Guitar chords
          </h1>
        </div>
      </NuxtLink>
    </div>
    <div class="py-4  bg-gray-100 flex-grow mx-2 ">
      <NuxtLink to="/piano-chords">
        <div class="flex justify-center items-center flex-col">
          <Icon name="icon-park-solid:piano" class="text-8xl" />
          <h1 class="text-2xl font-medium mt-4">
            Piano chords
          </h1>
        </div>
      </NuxtLink>
    </div>
    <div class="py-4 bg-gray-100 flex-grow mx-2 =">
      <NuxtLink to="/ukulele-chords">
        <div class="flex justify-center items-center flex-col">
          <Icon name="fluent:guitar-16-filled" class="text-8xl" />
          <h1 class="text-2xl font-medium mt-4">
            Ukulele chords
          </h1>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
