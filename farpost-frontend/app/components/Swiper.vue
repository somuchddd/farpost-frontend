<template>
    <Swiper :modules="modules"
     pagination :loop="true" class="slider">
        <SwiperSlide class="slider__figure">
            <Graph></Graph>
        </SwiperSlide class="slider__figure">
        <SwiperSlide>
            <Graph></Graph>
        </SwiperSlide>
        <SwiperSlide class="slider__figure">
            <Graph></Graph>
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
</script>

<style scoped>
.slider {
  width: 100%;
  height: 400px;
}

</style>