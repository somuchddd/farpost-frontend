<template>
    <div class="card" :class = "`card__${color}`">
        <div class="card__title">
            <img v-if="image" :src="image" alt="Изображение" class="card__image">
            <div class="card__count">452</div>
        </div>
        <div class="card__subtitle">{{ subtitle }}</div>
    </div>
</template>

<script setup>
    defineProps({
        subtitle: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    })
</script>

<style lang="scss">
    .card{
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        padding: 22px;
        gap: 12px;
        flex: 1;
    }

    .card__image{
        height: 48px;
    }

    .card__title{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
    }

    .card__subtitle{
        font-family: var(--font);
        font-weight: 700;
        font-style: bold;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }

    .card__count{
        font-family: var(--font);
        font-weight: 700;
        font-style: bold;
        font-size: 48px;
        line-height: 100%;
        color: #FFFFFF;
    }

    .card__cold{background-color: #03A9F4;}
    .card__hot{background-color: #FF7043;}
    .card__electricity{background-color: #9575CD;}
    .card__heating{
        background-color: #FF8F00;
        .card__image{
            height: 48px;
        }
    }
</style>