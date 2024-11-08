<template>
    <NuxtLink to="/"><div class="logo">itCats</div></NuxtLink>
</template>

<style lang="sass" scoped>
.logo 
  padding: 10px
  font:
    family: "Catamaran", sans-serif
    weight: 400
    style: normal
    size: 45px
  color: $primary
  cursor: pointer
  &:hover 
    color: $secondary
</style>