<template>
    <header class="header">
        <div class="header__container _container">
            <div class="header__logo">
                <img class="header__logo-image" src="../assets/img/logo.svg" alt="Логотип">
                <div class="header__logo-title">
                    <p class="header__logo-span">Отключение воды и света</p>
                    <p class="header__logo-span">во Владивостоке</p>
                </div>
            </div>
            <div class="header__actions">
                <nav class="header__actions-nav">
                    <NuxtLink to='/' class="header__nav-item">Главная</NuxtLink>
                    <NuxtLink to='#' class="header__nav-item">Показания счётчиков</NuxtLink>
                    <NuxtLink to='#' class="header__nav-item">Уведомления</NuxtLink>
                    <NuxtLink to='#' class="header__nav-item">УО Владивостока</NuxtLink>
                    <NuxtLink to='#' class="header__nav-item">Посты</NuxtLink>
                </nav>
                <button class="header__login-button">
                    <p class="header__login-title">
                        вход
                    </p>
                    <img class="header__login-icon" src="../assets/img/login_icon.svg" alt="">
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import logo from "../assets/img/logo.svg"
</script>

<style lang="scss">
    .header{
        padding-top: 10px;
        padding-bottom: 20px;
        border-bottom: 3px solid #08568538;
        font-family: var(--font);
    }

    .header__container{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .header__logo{
        width: 50%;
        display: flex;
        flex-direction: row;
        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
        &-title{
            display: flex;
            flex-direction: column;
            align-self: flex-end;
            padding-bottom: 5px;
            gap: 5px;
        }
        &-span:first-child{
            color: #FF7043;
            font-weight: 700;
        }
    }

    .header__actions{
        width: 50%;
        display: flex; 
        flex-direction: row;
        align-items: center;
        gap: 40px;
        &-nav{
            color: #085685;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            align-self: flex-end;
        }
        img{
            width: 36px;
        }
    }

    .header__login-button{
        background-color: #03A9F4;
        color: #FFFFFF;
        border-radius: 21px;
        border: 0px solid #085685;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 20px;
        gap: 10px;
        font-family: var(--font);
        font-weight: 700;
        font-size: 24px;
        transition: background-color 0.2s ease-in-out;
        &:hover{
            background-color:#085685;
        }
    }

    .header__nav-item{
        cursor: pointer;
        transition: color 0.2s ease-in-out;
        font-weight: 600;
        font-size: 16px;
        &:hover{
            color:#FF7043;
        }
    }

    @media(max-width: 949px){
        .header__actions{
            justify-content: flex-end;
            &-nav{
                display: none;
            }
        }
    }

    @media(max-width: 700px){
        .header__logo-title{
            font-size: 12px;
            padding-bottom: 0;
            gap: 2px;
            line-height: 100%;
        }
        
        .header__logo-image{
            width: 90px;
        }

        .header__actions{
            align-self: flex-end;
            img{
                width: 24px;
            }
        }

        .header__login-button{
                font-size: 14px;
        }
    }

    @media(max-width: 539px){
        .header__login-title{
            display: none;
        }
        .header__logo{
            width: auto;
        }
    }
</style>