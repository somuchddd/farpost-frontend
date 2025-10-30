<template>
    <div class="breakdown">
        <p class="title">Аварийность по жалобам</p>
        <Swiper></Swiper>
        <nav class="breakdown__nav">
            <p>Сегодня:</p>
            <NuxtLink to='#' class="breakdown__nav-item">общая сводка</NuxtLink>
            <p class="breakdown__nav-separator">|</p>
            <NuxtLink to='#' class="breakdown__nav-item">отключения</NuxtLink>
            <p class="breakdown__nav-separator">|</p>
            <NuxtLink to='#' class="breakdown__nav-item">плановые - 4</NuxtLink>
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    .breakdown{
        display: flex;
        flex-direction: column;
        gap: 25px;
        font-size: 20px;
        font-family: var(--font);
        flex-wrap: wrap;
    }
    .breakdown__nav{
        display: flex;
        flex-direction: row;
        gap: 5px;
        &-item{
            color: #085685;
            cursor: pointer;
            transition: color 0.3s ease-in-out;
            &:hover{
                color: #03A9F4;
            }
        }
    }

    @media(max-width: 600px){
        .breakdown__nav{
            font-size: 14px;
        }
    }
</style>