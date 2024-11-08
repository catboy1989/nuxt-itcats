<template>
  <Main>
    <template #h1>Контакты</template>
    <div class="main__container">
      <p class="main__p">
        Для связи с администратором сайта itcats.ru отправьте сообщение на почту
        itcats@yandex.ru или заполните форму.
      </p>
      <form class="contact-form" action="#" method="post">
        <label class="contact-form__label">Ваше имя.</label>
        <input type="text" class="contact-form__input" name="name" />
        <label class="contact-form__label">Ваш e-mail.</label>
        <input type="text" class="contact-form__input" name="e-mail" />
        <label class="contact-form__label">Ваше сообщение.</label>
        <textarea
          class="contact-form__textarea"
          name="message"
          cols="20"
          rows="10"
        ></textarea>
        <input class="contact-form__button" type="submit" value="отправить" />
      </form>
    </div>
  </Main>
</template>

<style lang="sass" scoped>
.main__container
    max-width: 1200px
    margin: 0 auto
    line-height: 2

.main__p
    text-align: center

.contact-form
    max-width: 500px
    margin: 30px auto 0
    padding: 20px 40px 30px 40px
    border: 1px solid $lightgray
    border-radius: 10px
    box-shadow: 0 0 10px rgba(128 128 128 / 20%)

    &__label
        display: block

    &__input
        width: 100%
        margin-bottom: 20px
        padding: 10px
        font-size: 24px
        border: 1px solid $primary
        border-radius: 5px
        outline: none

.contact-form__input:hover,
.contact-form__input:focus
    border-color: $secondary

.contact-form__textarea
    display: block
    width: 100%
    padding: 10px
    font-size: 20px
    border: 1px solid $primary
    border-radius: 5px
    outline: none

.contact-form__textarea:hover,
.contact-form__textarea:focus
    border-color: $secondary

.contact-form__button
    margin-top: 30px
    padding: 20px
    border: 1px solid $primary
    border-radius: 10px
    font-size: 24px
    color: $primary
    background-color: #fff
    cursor: pointer

    &:hover
        border-color: $secondary
        color: $secondary
</style>