<template>
    <footer class="footer">
        <div class="footer__container _container">
            <div class="footer__logo">
                <img src="../assets/img/footer_logo.svg" alt="">
            </div>
            <div class="footer__rights">
                <div>По вопросам, предложениям или ошибкам пишите на почту: off@vl.ru</div>
                <div>©ООО «Фарпост», 2003-2025</div>
                <div>При любом использовании материалов ссылка на VL.ru обязательна.</div>
                <div>Цитирование в Интернете возможно только при наличии гиперссылки.</div>
                <div>Все права защищены</div>
            </div>
            <nav class="footer__nav">
                <div class="footer__title">
                    Разделы
                </div>
                <div class="footer__list">
                    <NuxtLink to="/" class="footer__list-item">Главная</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Показания счётчиков</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Уведомления об отключениях</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">УО Владивостока</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Посты</NuxtLink>
                </div>
            </nav>
            <nav class="footer__websites">
                <div class="footer__title">
                    Сайты Владивостока
                </div>
                <div class="footer__list">
                    <NuxtLink to="#" class="footer__list-item">Авто</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Кино</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Недвижимость</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Новости</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Объявления</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Работа</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Справочник компаний</NuxtLink>
                </div>
            </nav>
            <div class="footer__info">
                <div class="footer__title">
                    Информация
                </div>
                <div class="footer__list">
                    <NuxtLink to="#" class="footer__list-item">Вакансии</NuxtLink>
                    <NuxtLink to="#" class="footer__list-item">Контакты</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer{
        padding-bottom: 40px;
        padding-top: 40px;
        color: #FFFFFF;
        background-color: #FF7043;
        &__logo{
            grid-area: logo;
        }
        &__rights{
            grid-area: rights;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-family: var(--font);
            opacity: 0.7;
        }
        &__nav{
            grid-area: nav;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        &__websites{
            grid-area: websites;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        &__info{
            grid-area: info;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        &__list{
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }
        &__title{
            font-family: var(--main-font);
            font-weight: 400;
            font-size: 18px;
        }
        &__list-item{
            font-family: var(--font);
            font-size: 16px;
            cursor: pointer;
            transition: opacity 0.2s ease-in-out;
            &:hover{
                opacity: 0.5;
            }
        }
    }

    .footer__container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: "logo nav websites info"
                             ". nav websites rights";
        row-gap: 15px;
    }

    @media(max-width: 1160px){
        .footer__container{
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas: "logo ."
                                 "nav websites"
                                 "info ."
                                 "rights rights";
            row-gap: 30px;
        }
    }

    @media(max-width: 600px){
        .footer__container{
            grid-template-columns: 1fr;
            grid-template-areas: "logo"
                                 "nav"
                                 "websites"
                                 "info"
                                 "rights";
        }
    }
</style>

<script>
</script>