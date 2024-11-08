<script setup lang="ts">
const props = defineProps<{
  videos: { slug: string; img: string; title: string }[];
}>();
</script>

<template>
  <div class="video-list">
    <VideoCard v-for="(video, index) of props.videos" :key="index" :video="video" />
  </div>
</template>

<style lang="sass" scoped>
.video-list
    display: flex
    flex-wrap: wrap
    justify-content: center
    row-gap: 20px
</style>