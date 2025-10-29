<template>
    <div class="intro">
        <div class="title">
            Узнайте об отключениях в своём доме
        </div>
        <div class="intro__image">
            <img src="../assets/img/intro_image.png" alt="">
        </div>
    </div>
</template>

<style lang="scss">
    .intro{
        display: flex;
        flex-direction: column;
        gap: 40px;
        &__title{
            font-family: var(--main-font);
            font-size: 40px;
            font-weight: 400;
            color: #085685;
        }
        &__image{
            img{
                width: 100%;
                height: auto;
                display: block;
            }
        }
    }
</style>