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
import { shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import {
  YandexMap,
  YandexMapControlButton,
  YandexMapControls,
  YandexMapGeolocationControl,
  YandexMapOpenMapsButton,
  YandexMapZoomControl,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
} from 'vue-yandex-maps';

const map = shallowRef<null | YMap>(null);
const isFullscreen = ref(false);
const height = ref('496px')
const timedCounter = ref(1);



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
</script>

<style>
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