<template>
    <div class="feedback">
        <div class="feedback__problem">
            <div class="feedback__problem-info">
                <p>Превышены нормативы отключения электричества/воды?</p>
                <p>Не указана причина отключения?</p>
            </div>
            <button class="feedback__problem-button">
                <p>Сообщить о проблеме</p>
            </button>
        </div>
        <div class="feedback__image">
            <p class="feedback__image-text bottom-right">Я уже никому не верю</p>
            <img src="../assets/img/cat.png" alt="">
            <p class="feedback__image-text top-left">И ничего не жду...</p>
        </div>
        <div class="feedback__notification">
            <p class="feedback__notification-title">Чтобы всегда быть в курсе</p>
            <img class="feedback__notification-arrow" src="../assets/img/down_arrow.svg" alt="">
            <div class="feedback__notification-content">
                <img class="feedback__notification-icon" src="../assets/img/bell.svg" alt="">
                <NuxtLink to="#" class="feedback__notification-text">Подключиться на уведомления об отключении воды и света</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    .feedback{
        display: grid; 
        grid-template-columns: repeat(3, 1fr);
        padding-top: 20px;
        color: #FFFFFF;
        &__problem{
            display: flex;
            flex-direction: column;
            gap: 60px;
            font-family: var(--font);
            font-size: 22px;
            line-height: 100%;
            max-width: 270px;
            &-info{
                display: flex;
                flex-direction: column;
                gap: 40px;
            }
            &-button{
                background-color: #FF7043;
                border: 0px;
                border-radius: 22px;
                color: #FFFFFF;
                font-size: 20px;
                font-family: var(--font);
                font-weight: 600;
                padding: 20px 17px;
                white-space: nowrap;
                cursor: pointer;
                transition: background-color 0.3s ease-in-out;
                &:hover{
                    background-color: #e05a00;
                }
            }
        }
        &__notification{
            display: flex;
            flex-direction: column;
            gap: 70px;
            position: relative;
            &-arrow{
                position: absolute;
                width: 85px;
                top: 35px;
                left: 100px;
            }
            &-title{
                font-size: 32px;
                font-family: var(--main-font);
                font-weight: 400;
            }
            &-content{
                display: flex;
                gap: 40px;
                align-items: center;
            }
            &-icon{
                background-color: #FF7043;
                border-radius: 50px;
                padding: 10px;
            }
            &-text{
                font-size: 20px;
                font-family: var(--font);
                font-weight: 600;
                text-decoration: underline;
                cursor: pointer;
            }
        }
        &__image{
            bottom: 35px;
            position: relative;
            &-text{
                position: absolute;
                font-size: 32px;
                font-family: var(--main-font);
                font-weight: 400;
                line-height: 32px;
                color: #FFFFFF;
                -webkit-text-stroke: 1px #085685;
                width: 200px;
            }
        }
    }

    .bottom-right{
        right: 20px;
        bottom: 20px;
    }

    .top-left{
        left: 20px;
        top: 50px;
    }

    @media(max-width: 1297px){
        .feedback{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 900px){
        .feedback{
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>