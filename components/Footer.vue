<template>
  <div class="footer">
    <div class="footer__container">
      <FooterLinks />
    </div>
    <div class="footer__container">
      <IconList />
      <div class="footer-button-wrapper">
        <ButtonDonate />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.footer
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 20px
    padding: 40px 20px
    color: #fff
    background-color: $gray
.footer__container
    width: 350px
.footer-button-wrapper
    margin-top: 30px
</style>