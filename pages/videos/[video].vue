<script setup lang="ts">
import videos from "@/storage/videos";
const route = useRoute();
const video = videos.find((element) => element.slug === route.params.video);
if (!video) {
  throw createError({ statusCode: 404, statusMessage: "Страница не найдена" });
}
const otherVideos = videos.filter((item) => item !== video)
</script>

<template>
  <Main>
    <Head><Title>{{ video.title }}</Title></Head>
    <template #h1> {{ video.title }} </template>
    <div class="video-container">
      <iframe
        class="video-container__iframe"
        :src="video.video"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p class="video-container__text">
        {{ video.description }}
      </p>
      <h2 class="video-container__h2">Другие видео.</h2>
      <VideoList :videos="otherVideos" />
    </div>
  </Main>
</template>

<style lang="sass" scoped>
.video-container
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 50px

    &__iframe
        width: 560px
        height: 315px
        border: none

    &__text
        width: 560px
        padding: 20px 10px 10px 10px
        font-size: 18px
        line-height: 1.5

    &__h2
        margin-top: 30px
        margin-bottom: 30px
        font-size: 24px
</style>