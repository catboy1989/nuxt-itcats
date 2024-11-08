<script setup lang="ts">
const isActive = ref<boolean>(false)
const props = defineProps<{active?: boolean}>()
const emit = defineEmits<{
  burgerToggle: [burgerToggle: boolean]
}>()
function toggle(): void {
  isActive.value = !isActive.value;
  emit('burgerToggle', isActive.value)
}
watch(() => props.active, (active: boolean) => {
  if (active != isActive.value) {
    isActive.value = active
  }
}) 
</script>

<template>
  <div
    class="menu-burger"
    @click="toggle"
    :class="{ 'menu-burger_active': isActive }"
  >
    <div class="menu-burger__inner">
      <span class="menu-burger__line"></span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.menu-burger
    width: 50px
    height: 40px
    padding: 10px
    outline: 1px solid $primary
    cursor: pointer
    &:hover
        outline: 1px solid $secondary
.menu-burger_active
    outline: none
    &:hover
        outline: none
.menu-burger:hover .menu-burger__line,
.menu-burger:hover .menu-burger__inner::before,
.menu-burger:hover .menu-burger__inner::after
    background-color: $secondary
.menu-burger__inner
    position: relative
    display: block
    width: 30px
    height: 20px
    padding: 10px
.menu-burger__line,
.menu-burger__inner::before,
.menu-burger__inner::after
    position: absolute
    left: 0
    width: 100%
    height: 10%
    background-color: $primary
    transition: all 0.3s ease 0s
.menu-burger__inner::before,
.menu-burger__inner::after
    content: ""
.menu-burger__inner::before
    top: 0
.menu-burger__inner::after
    bottom: 0
.menu-burger__line
    top: 50%
    transform: scale(1) translate(0px, -50%)
.menu-burger_active .menu-burger__line
    transform: scale(0) translate(0px, -50%)
.menu-burger_active .menu-burger__inner::before
    top: 50%
    transform: rotate(-45deg) translate(0px, -50%)
.menu-burger_active .menu-burger__inner::after
    bottom: 50%
    transform: rotate(45deg) translate(0px, 50%)
</style>
