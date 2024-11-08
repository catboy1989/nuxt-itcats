<script setup lang="ts">
const props = defineProps<{
  open: boolean;
}>();
const menuList = [
  { href: "/", text: "Все видео." },
  { href: "/sitemap", text: "Карта сайта." },
  { href: "/soglashenie", text: "Пользовательское соглашение." },
  { href: "/contact", text: "Контакты." },
];
</script>

<template>
  <Transition name="slide-right">
    <div class="main-menu" v-show="props.open">
      <MainMenuList :menuList="menuList" />
      <IconList />
      <div class="main-menu__button-wrapper">
        <ButtonDonate />
      </div>
    </div>
  </Transition>
</template>

<style lang="sass" scoped>
.main-menu
    position: absolute
    top: 0
    left: 0
    z-index: 70
    width: 100%
    min-height: 100%
    padding: 30px 30px 30px 30px
    background-color: rgba(0, 0, 0, 0.9)
    transition: all 1s ease 0s
    overflow: auto
    &__button-wrapper
        margin-top: 30px
</style>