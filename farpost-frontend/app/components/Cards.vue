<template>
    <div class="cards">
        <div class="title">
            Сейчас в городе
        </div>
        <div class="cards__list">
            <Card subtitle="домов без горячей воды" :image="waterDrop" color="hot" :count="summary.hot_water"></Card>
            <Card subtitle="домов без холодной воды" :image="waterDrop" color="cold" :count="summary.cold_water"></Card>
            <Card subtitle="домов без электричества" :image="electricity" color="electricity" :count="summary.electricity"></Card>
            <Card subtitle="домов без отопления" :image="heating" color="heating" :count="summary.heat"></Card>
        </div>
    </div>
</template>

<script setup>
import waterDrop from '../assets/img/water_drop.svg'
import heating from '../assets/img/heating.svg'
import electricity from '../assets/img/electricity.svg'
import { outageSummaryService } from '~/services/outageService';
const summary = outageSummaryService.getOutageSummary();
</script>

<style lang="scss">
    .cards{
        display: flex;
        flex-direction: column;
        gap: 45px;
        min-width: 0;
        &__list{
            display: flex;
            flex-direction: row;
            gap: 45px;
            overflow: auto;
        }
        &__title{
            font-family: var(--main-font);
            font-size: 40px;
            font-weight: 400;
            color: #085685;
        }
    }

    @media(max-width: 700px){
        .cards__list{
            gap: 20px;
        }
    }

    @media(max-width: 600px){
        .cards{
            gap: 20px;
        }
    }
    
</style>