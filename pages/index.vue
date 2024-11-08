<script setup lang="ts">
import videos from "~/storage/videos"
</script>

<template>
  <Main>
    <template #h1> Все видео школы itCats. </template>
    <VideoList :videos="videos" />
  </Main>
</template>

