<template>
    <Swiper :modules="modules"
     pagination :loop="true" class="slider">
        <SwiperSlide class="slider__figure">
            <Graph :data-service="monthDataService"></Graph>
        </SwiperSlide class="slider__figure">
        <SwiperSlide>
            <Graph :data-service="dayDataService"></Graph>
        </SwiperSlide>
        <SwiperSlide class="slider__figure">
            <Graph :data-service="hourDataService"></Graph>
        </SwiperSlide>
    </Swiper>
</template>
<script lang="ts" setup>
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Graph from '../components/Graph.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]

import { hourDataService } from '~/services/hourDataService'
import { dayDataService } from '~/services/dayDataService'
import { monthDataService } from '~/services/monthDataService'
</script>

<style scoped>
.slider {
  width: 100%;
  height: 250px;
}

</style>