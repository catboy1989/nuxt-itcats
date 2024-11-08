<script setup lang="ts">
const linkList = [
  { href: "/", text: "Все видео." },
  { href: "/sitemap", text: "Карта сайта." },
  { href: "/soglashenie", text: "Пользовательское соглашение." },
  { href: "/contact", text: "Контакты." },
];
</script>


<template>
  <ul class="footer__ul">
    <li class="footer__li" v-for="(item, index) of linkList" :key="index">
      <NuxtLink :href="item.href" class="footer__link">{{ item.text }}</NuxtLink>
    </li>
  </ul>
</template>

<style lang="sass" scoped>
.footer__li
    margin-bottom: 16px

    &nk
        color: #fff

    &nk:hover
        text-decoration: underline
</style>