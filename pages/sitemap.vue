<script setup lang="ts">
import videos from "@/storage/videos";
</script>

<template>
  <Main>
    <template #h1>Карта сайта itCats.</template>
    <div class="main-container">
      <h2 class="main-container__h2">Страницы</h2>
      <ul>
        <li>
          <NuxtLink to="/" class="main-container__link">Главная</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/soglashenie" class="main-container__link">
            Пользовательское соглашение
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="main-container__link">Контакты</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/donate" class="main-container__link">Поддержать</NuxtLink>
        </li>
      </ul>
      <hr class="hr" />
      <NuxtLink to="/">
        <h2 class="main-container__h2 main-container__h2_link">Все видео</h2>
      </NuxtLink>
      <ul v-if="!!videos">
        <li v-for="(video, index) of videos" :key="index">
          <NuxtLink :to="`/videos/${video.slug}`" class="main-container__link">
            {{ video.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </Main>
</template>

<style lang="sass" scoped>
.main-container
    text-align: center

    &__h2
        margin-top: 20px
        margin-bottom: 20px
        font-size: 28px

    &__h2_link:hover
        text-decoration: underline

    &__link
        line-height: 2

    &__link:hover
        text-decoration: underline
    & .hr
        margin: 20px auto

.hr
    width: 80%
    height: 1px
    background-color: $lightgray
</style>