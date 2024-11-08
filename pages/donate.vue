<template>
  <Main>
    <template #h1>Спасибо вам за поддержку!</template>
    <div class="main__container">
      <div class="main__text">
        <p>Я очень рад, что вы захотели поддержать данный проект.</p>
        <p>
          Благодаря вам, я запишу ещё больше полезных образовательных видео и
          создам много ценных курсов.
        </p>
        <p>Желаю вам эффективного обучения и блестящей карьеры.</p>
        <form action="#" method="post" class="donate-form">
          <label class="donate-form__label"
            >Введите сумму поддержки в рублях.</label
          >
          <input type="number" class="donate-form__input" value="1000" />
          <label class="donate-form__label">Введите комментарий.</label>
          <textarea
            cols="20"
            rows="10"
            class="donate-form__textarea"
          ></textarea>
          <input class="donate-form__button" type="submit" value="оплатить" />
        </form>
      </div>
      <div class="cat">
        <img src="/img/catboy.png" alt="котик" class="cat__img" />
      </div>
    </div>
  </Main>
</template>

<style lang="sass" scoped>
.main__container
    max-width: 1200px
    margin: 0 auto
.main__text
    text-align: center
    font-size: 20px
    line-height: 2
.donate-form
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

.donate-form__input:hover,
.donate-form__input:focus
    border-color: $secondary

.donate-form__textarea
    display: block
    width: 100%
    padding: 10px
    font-size: 20px
    border: 1px solid $primary
    border-radius: 5px
    outline: none

.donate-form__textarea:hover,
.donate-form__textarea:focus
    border-color: $secondary

.donate-form__button
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

.cat
    max-width: 400px
    margin: 0 auto
    padding: 40px

    &__img
        width: 100%
</style>