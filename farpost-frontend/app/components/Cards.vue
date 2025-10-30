<template>
  <div class="cards">
    <div class="title">
      Сейчас в городе
    </div>

    <div class="cards__list" v-if="summary">
      <Card
        subtitle="домов без горячей воды"
        :image="waterDrop"
        color="hot"
        :count="summary.hot_water"
      />
      <Card
        subtitle="домов без холодной воды"
        :image="waterDrop"
        color="cold"
        :count="summary.cold_water"
      />
      <Card
        subtitle="домов без электричества"
        :image="electricity"
        color="electricity"
        :count="summary.electricity"
      />
      <Card
        subtitle="домов без отопления"
        :image="heating"
        color="heating"
        :count="summary.heat"
      />
    </div>

    <div v-else class="loading">
      Загрузка данных...
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import waterDrop from '../assets/img/water_drop.svg';
import heating from '../assets/img/heating.svg';
import electricity from '../assets/img/electricity.svg';
import { outageSummaryService } from '~/services/outageService';
import type { OutageSummary } from '~/entities/outageSummary';

const summary = ref<OutageSummary | null>(null);

onMounted(async () => {
  try {
    summary.value = await outageSummaryService.getOutageSummary();
  } catch (error) {
    console.error('Ошибка при загрузке сводки отключений:', error);
  }
});
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
