<template>
  <NuxtLayout name="default">
    <Main>
      <template #h1>
        <template v-if="error.statusCode === 404">Ошибка 404</template>
        <template v-else
          >Произошла ошибка. Статус код: {{ error.statusCode }}</template
        >
      </template>
      <div class="error__container">
        <p class="error__text">Запрошенной вами страницы не существует.</p>
        <NuxtLink to="/">
          <div class="back-main">
            <p>Вернуться на главную</p>
            <Logo />
          </div>
        </NuxtLink>
        <NuxtLink to="/">
          <img class="video-icon" src="/img/video_icon.png" alt="все видео" />
        </NuxtLink>
      </div>
    </Main>
  </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<style lang="sass" scoped>
.error__container
    display: flex
    flex-direction: column
    align-items: center
    gap: 30px
.error__text
    font-size: 24px
.back-main
    width: 250px
    border: 1px solid $primary
    border-radius: 10px
    padding: 20px
    font-size: 20px
    color: black
    cursor: pointer
    &:hover
        color: $secondary
        border: 1px solid $secondary
    &:hover .logo
        color: $secondary
.video-icon
    width: 250px
    transition: 1s
    &:hover
        transform: scale(1.05)
@media (max-width: 550px)
.back-main
    width: 200px

.video-icon
    width: 200px
</style>