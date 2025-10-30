<template>
    <div class="map__wrapper">
        <div class="title">
            Карта отключений
        </div>
        <yandex-map
        class="yandex__map"
        v-model="map"
        :height="isFullscreen ? '100dvh' : height"
        :settings="{
            location: {
            center: [131.921470, 43.095937],
            zoom: 12,
            },   
        }"
        >
            <yandex-map-default-scheme-layer/>
            <yandex-map-default-features-layer />
            <yandex-map-ui-marker
                v-for="marker in markers"
                :key="marker.id"
                :settings="{
                onClick: () => handleMarkerClick(marker.id),
                popup: { 
                    position: 'top right', 
                    show: isPopupVisible(marker.id)
                },
                coordinates: marker.coordinates,
                size: 'micro',
                color: {day: getProblemColor(marker.problems[0]?.type || 'unknown'), night: getProblemColor(marker.problems[0]?.type || 'unknown')},
                }"
            >
                <template #popup>
                    <div class="marker-popup">
                        <p>{{ marker.street }}</p>
                        <div v-for="(problem, index) in marker.problems" :key="index" class="problem-item">
                            <div
                                class="problem-icon-wrapper"
                                :style="{ backgroundColor: getProblemColor(problem.type) }"
                            >
                                <img :src="getProblemType(problem.type)" :alt="problem.type" class="problem-icon" />
                            </div>
                            <p>{{ problem.description }}. Заявка: {{ problem.ticketNumber }}</p>
                        </div>
                    </div>
                </template>
            </yandex-map-ui-marker>
            
            <yandex-map-controls :settings="{ position: 'bottom left', orientation: 'vertical' }">
                <yandex-map-open-maps-button/>
            </yandex-map-controls>
            <yandex-map-controls :settings="{ position: 'top right', orientation: 'vertical' }">
                <yandex-map-control-button :settings="{ onClick: toggleFullscreen }">
                    <div
                        class="fullscreen"
                        :class="{ 'exit-fullscreen': isFullscreen }"
                    />
                </yandex-map-control-button>
            </yandex-map-controls>
            <yandex-map-controls :settings="{ position: 'top left' }">
                <yandex-map-geolocation-control/>
            </yandex-map-controls>
            <yandex-map-controls :settings="{ position: 'left' }">
                <yandex-map-zoom-control/>
            </yandex-map-controls>
        </yandex-map>
    </div>
</template>

<script setup lang="ts">
import { outageMarkerService } from '~/services/outageMarkerService'
import { shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import waterIcon from '../assets/img/water_drop.svg';
import heatIcon from '../assets/img/heating.svg';
import electricityIcon from '../assets/img/electricity.svg'
import {
  YandexMap,
  YandexMapControlButton,
  YandexMapControls,
  YandexMapGeolocationControl,
  YandexMapOpenMapsButton,
  YandexMapZoomControl,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapUiMarker
} from 'vue-yandex-maps';

const map = shallowRef<null | YMap>(null);
const isFullscreen = ref(false);
const height = ref('496px')
const timedCounter = ref(1);

const markers = outageMarkerService.getMarkers();
const activeMarkerKey = ref<number | null>(null);

const handleMarkerClick = (id: number) => {
  activeMarkerKey.value = activeMarkerKey.value === id ? null : id;
};

const isPopupVisible = (id: number) => {
  return activeMarkerKey.value === id;
};

const toggleFullscreen = () => {
    if (isFullscreen.value) {
        document.exitFullscreen();
    }
    else {
        map.value!.container.requestFullscreen();
    }
};

onMounted(() => {
    const handleFullscreenChange = async () => {
        isFullscreen.value = !!document.fullscreenElement;
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    const interval = setInterval(() => {
        timedCounter.value++;
        if (timedCounter.value > 99) timedCounter.value = 0;
    }, 1000);

    onBeforeUnmount(() => {
        clearInterval(interval);
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
    });
});

const getProblemColor = (type: string): string => {
  switch (type) {
    case 'heat': return '#FF8F00';
    case 'cold_water': return '#03A9F4';
    case 'hot_water': return '#FF7043';
    case 'electricity': return '#9575CD';
    default: return '#999999';
  }
}

const getProblemType = (type: string): string => {
    switch (type) {
        case 'heat': return heatIcon;
        case 'cold_water': return waterIcon;
        case 'hot_water': return waterIcon;
        case 'electricity': return electricityIcon;
        default: return waterIcon;
    }
}
</script>

<style>
    .marker-popup{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-family: var(--main-font);
        font-weight: 400;
    }

    .problem-item{
        display: flex;
        flex-direction: row;
        font-family: var(--font);
        align-items: center;
        gap: 5px;
    }
    .problem-icon-wrapper{
        width: fit-content;
        border-radius: 40px;
        padding: 5px;
        padding-bottom: 0px;
    }
    .problem-icon{
        width: 15px;
        height: 15px;
    }
    .map__wrapper{
      font-family: var(--font);
      display: flex;
      flex-direction: column;
      gap: 45px;
    }
    
    .yandex__map{
        border-radius: 35px;
        overflow: hidden;
        height: 496px;
    }

    .fullscreen {
      width: 26px;
      height: 26px;

      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Cg fill='%236B6B6B'%3E%3Cpath d='M16.14 7.86L14.27 6H20v5.7l-1.83-1.82L15.04 13 13 10.98l3.13-3.13zm0 0M9.86 18.14L11.73 20H6v-5.7l1.83 1.82L10.96 13 13 15.02l-3.13 3.13zm0 0'/%3E%3C/g%3E%3C/svg%3E");
    }

    @media(max-width: 600px){
        .map__wrapper{
            gap: 20px;
        }
    }
</style>