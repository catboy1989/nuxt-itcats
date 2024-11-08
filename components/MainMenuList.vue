<script setup lang="ts">
const props = defineProps<{
  menuList: { href: string; text: string }[];
}>();
</script>

<template>
  <ul>
    <li
      class="main-menu__list-item"
      v-for="(item, index) of props.menuList"
      :key="index"
    >
      <NuxtLink :href="item.href" class="main-menu__link">{{ item.text }}</NuxtLink>
    </li>
  </ul>
</template>

<style lang="sass" scoped>
.main-menu__list-item
    margin: 0px 0px 30px 0px
.main-menu__link
    font-size: 24px
    color: #fff
    &:hover
        text-decoration: underline
</style>