<template>
  <div class = "form__container">
    <p class="title">
        Форма для создания документа
    </p>
    <form class="form">
        <input class="form__input" type="text" placeholder="Кому" required>
        <input class="form__input" type="text" placeholder="От кого" required>
        <input class="form__input" type="text" placeholder="Адрес" required>
        <input class="form__input" type="text" placeholder="Организация" required>
        <input class="form__input" type="text" placeholder="Описание проблемы" required>
        <button class="form__button" type="submit">Скачать заявление</button>
    </form>
  </div>
</template>

<style lang="scss">
    .form{
        display: flex;
        flex-direction: column;
        width: fit-content;
        gap: 40px;
        background-color: #B4DDF4;
        padding: 20px 30px;
        border-radius: 20px;
        &__container{
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        &__input{
            width: 100%;
            background-color: #FFFFFF;
            font-size: 16px;
            font-family: var(--font);
            font-weight: 400;
            border: 0px;
            padding: 5px 10px;
            border-radius: 5px;
        }

        &__block{
            padding: 20px;
            background-color: aqua;
            border-radius: 50px;
        }

        &__button{
            padding: 10px 5px;
            font-size: 20px;
            font-family: var(--font);
            background-color: #FF7043;
            border: 0px;
            color: #ffffff;
            border-radius: 5px;
            min-width: 0px;
        }
    }
</style>

