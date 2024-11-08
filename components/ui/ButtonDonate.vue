<template>
  <NuxtLink to="/donate"
    ><div class="button-donate">
      поддержать
      <img src="/img/heart.svg" alt="love" class="button-donate__icon" /></div
  ></NuxtLink>
</template>

<style lang="sass" scoped>
.button-donate
    display: inline-flex
    border: 1px solid $primary
    padding: 10px
    align-items: center
    font-size: 20px
    color: $primary
    border-radius: 10px
    &__icon
        width: 30px
        height: 30px
        margin-left: 5px
        @include filter-primary
    &:hover
        border: 1px solid $secondary
        color: $secondary
        .button-donate__icon
            @include filter-secondary
</style>