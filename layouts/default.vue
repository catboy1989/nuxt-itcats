<script setup lang="ts">
const mainMenuOpen = ref<boolean>(false);
function mainMenuToggle(open: boolean): void {
  mainMenuOpen.value = open;
}
</script>


<template>
  <div class="page">
    <Header :mainMenuOpen="mainMenuOpen" @burger-toggle="mainMenuToggle" />
    <div class="main-menu-wrapper">
      <MainMenu :open="mainMenuOpen" @click="mainMenuOpen = false" />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page
  display: grid
  grid-template-rows: auto 1fr
  min-height: 100%
.main-menu-wrapper
  position: relative
  display: grid
  grid-template-rows: 1fr auto
  min-height: 100%
</style>