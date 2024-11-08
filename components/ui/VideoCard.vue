<script setup lang="ts">
const props = defineProps<{
  video: { slug: string; img: string; title: string };
}>();
</script>

<template>
  <NuxtLink :to="`/videos/${props.video.slug}`"
    ><div class="video-card">
      <img
        class="video-card__img"
        :src="`/img/${props.video.img}`"
        :alt="props.video.title"
      />
      <h2 class="video-card__h2">
        {{ props.video.title }}
      </h2>
    </div></NuxtLink
  >
</template>

<style lang="sass" scoped>
.video-card
    width: 350px
    padding: 10px

    &__img
        width: 100%
        border-radius: 10px
        transition: 1s

    &:hover &__img
        transform: scale(1.05)

    &__h2
        margin-top: 10px
        font-size: 18px
        color: $darkgray
        padding: 0 10px
        line-height: 1.5

    &:hover &__h2
        text-decoration: underline dashed
        text-underline-offset: 8px
</style>