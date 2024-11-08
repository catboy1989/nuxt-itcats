<script setup lang="ts">
defineProps<{
  mainMenuOpen: boolean
}>()
defineEmits<{
  burgerToggle: [burgerToggle: boolean];
}>();
</script>

<template>
  <div class="header">
    <div class="header__left">
      <Logo />
      <Burger :active="mainMenuOpen" @burger-toggle="$emit('burgerToggle', $event)" />
      <HeaderLinks class="hidden-767" />
    </div>
    <div class="header__right">
      <IconList class="hidden-992" />
      <ButtonDonate class="hidden-420" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.header
  display: flex
  padding: 10px 30px 10px 40px
  justify-content: space-between
  align-items: center
  background-color: $gray

.header__left
  display: flex
  align-items: center
  gap: 50px

.header__right
  display: flex
  align-items: center
  gap: 30px
@media (max-width: 992px)
  .hidden-992
    display: none
@media (max-width: 767px)
  .header
    padding: 10px
    &__left
      gap: 30px

    &__right
      gap: 0px
  .hidden-767
    display: none
@media (max-width: 420px)
  .hidden-420
    display: none
</style>