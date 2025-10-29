<template>
    <div class="intro">
        <div class="intro__title title">
            Узнайте об отключениях в своём доме
        </div>
        <div class="intro__image">
            <img src="../assets/img/intro_image.png" alt="">
        </div>
    </div>
</template>

<style lang="scss">
    .intro{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 40px;
        &__image{
            img{
                width: 100%;
                height: auto;
                display: block;
            }
        }
    }

    @media(max-width: 600px){
        .intro{
            gap: 20px;
        }
    }
</style>