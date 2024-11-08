<script setup lang="ts">
const props = defineProps<{
  src: string;
  href: string;
  alt: string;
}>();
</script>

<template>
  <NuxtLink :to="props.href"
    ><img :src="props.src" :alt="props.alt" class="icon"
  /></NuxtLink>
</template>

<style lang="sass" scoped>
.icon
    width: 40px
    height: 40px
    @include filter-primary
    &:hover
        @include filter-secondary
</style>