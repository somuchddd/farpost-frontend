<template>
  <div class = "form__container">
    <p class="title">
        Форма для создания документа
    </p>
    <p class="form__subtitle">Заполните данную форму для того, чтобы мы помогли вам составить обращение с жалобой в управляющую компанию. Обращение составится автоматически!</p>
    <form class="form">
        <input class="form__input" type="text" placeholder="Кому" required>
        <input class="form__input" type="text" placeholder="От кого" required>
        <input class="form__input" type="text" placeholder="Адрес" required>
        <input class="form__input" type="text" placeholder="Организация" required>
        <textarea rows="40" cols="50" placeholder="Описание проблемы"></textarea>
        <button class="form__button" type="submit">Скачать заявление</button>
    </form>
  </div>
</template>

<style lang="scss">
    textarea{
        height: 150px;
        width: 100%;
        background-color: #FFFFFF;
        font-size: 16px;
        font-family: var(--font);
        font-weight: 400;
        border: 0px;
        padding: 5px 10px;
        border-radius: 5px;
        resize: horizontal;
    }

    .form{
        display: flex;
        flex-direction: column;
        width: 60%;
        gap: 40px;
        background-color: #B4DDF4;
        padding: 20px 30px;
        border-radius: 20px;
        &__subtitle{
            font-family: var(--font);
            font-size: 20px;
            font-weight: 400;
        }
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
            height: 40px;
            resize: horizontal;
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

    @media(max-width: 1000px){
        .form{
            width: 100%;
        }
    }

    @media(max-width: 600px){
        .form__subtitle{
            font-size: 16px;
        }
    }
</style>

