<template>
    <div class="search">
        <div>
            <img src="../assets/img/geo.svg" alt="">
        </div>
        <button class="search__button">
            <span>Проверить</span>
        </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .search{
        display: flex;
        justify-content: space-between;
        padding: 9px 16px;
        background-color: #03A9F4;
        border-radius: 20px;
        align-items: center;
        &__button{
            border-radius: 15px;
            border: 0px;
            color: #085685;
            font-family: var(--font);
            font-size: 20px;
            font-weight: 700;
            padding: 10px 25px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
            &:hover{
                background-color: #B4DDF4;
            }
        }
    }

    @media(max-width: 700px){
        img{
            width: 30px;
        }

        .search__button{
            font-size: 14px;
            padding: 10px 15px;
        }
    }
</style>