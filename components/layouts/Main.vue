<template>
  <div class="main">
    <h1 v-if="!!$slots.h1"><slot name="h1" /></h1>
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.main
  padding: 30px
.main h1
  font-size: 32px
  text-align: center
  margin-bottom: 30px
</style>