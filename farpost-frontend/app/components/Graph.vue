<script lang="ts" setup>
type MonthDataItem = {
  day: string
  electricity: number
  heating: number
  hotWater: number
  coldWater: number
}

const MonthData: MonthDataItem[] = [
  { day: '01.12', electricity: 45, heating: 32, hotWater: 28, coldWater: 15 },
  { day: '02.12', electricity: 38, heating: 29, hotWater: 25, coldWater: 12 },
  { day: '03.12', electricity: 52, heating: 41, hotWater: 35, coldWater: 18 },
  { day: '04.12', electricity: 29, heating: 25, hotWater: 22, coldWater: 10 },
  { day: '05.12', electricity: 47, heating: 36, hotWater: 31, coldWater: 14 },
  { day: '06.12', electricity: 41, heating: 33, hotWater: 27, coldWater: 13 },
  { day: '07.12', electricity: 56, heating: 44, hotWater: 38, coldWater: 20 },
  { day: '08.12', electricity: 33, heating: 28, hotWater: 24, coldWater: 11 },
  { day: '09.12', electricity: 49, heating: 37, hotWater: 32, coldWater: 16 },
  { day: '10.12', electricity: 42, heating: 34, hotWater: 29, coldWater: 14 },
  { day: '11.12', electricity: 58, heating: 46, hotWater: 40, coldWater: 22 },
  { day: '12.12', electricity: 36, heating: 30, hotWater: 26, coldWater: 12 },
  { day: '13.12', electricity: 51, heating: 39, hotWater: 34, coldWater: 17 },
  { day: '14.12', electricity: 44, heating: 35, hotWater: 30, coldWater: 15 },
  { day: '15.12', electricity: 61, heating: 48, hotWater: 42, coldWater: 24 },
  { day: '16.12', electricity: 39, heating: 31, hotWater: 27, coldWater: 13 },
  { day: '17.12', electricity: 53, heating: 40, hotWater: 35, coldWater: 18 },
  { day: '18.12', electricity: 46, heating: 36, hotWater: 31, coldWater: 15 },
  { day: '19.12', electricity: 64, heating: 50, hotWater: 44, coldWater: 26 },
  { day: '20.12', electricity: 41, heating: 32, hotWater: 28, coldWater: 14 },
  { day: '21.12', electricity: 55, heating: 42, hotWater: 37, coldWater: 19 },
  { day: '22.12', electricity: 48, heating: 37, hotWater: 33, coldWater: 16 },
  { day: '23.12', electricity: 67, heating: 52, hotWater: 46, coldWater: 28 },
  { day: '24.12', electricity: 43, heating: 34, hotWater: 29, coldWater: 15 },
  { day: '25.12', electricity: 57, heating: 43, hotWater: 38, coldWater: 20 },
  { day: '26.12', electricity: 50, heating: 38, hotWater: 34, coldWater: 17 },
  { day: '27.12', electricity: 70, heating: 54, hotWater: 48, coldWater: 30 },
  { day: '28.12', electricity: 45, heating: 35, hotWater: 31, coldWater: 16 },
  { day: '29.12', electricity: 59, heating: 45, hotWater: 39, coldWater: 21 },
  { day: '30.12', electricity: 52, heating: 39, hotWater: 35, coldWater: 18 }
];
const RevenueCategoriesMultple = {
  heating: { name: 'Отопление', color: '#FF8F00' },
  coldWater: { name: 'Холодная вода', color: '#03A9F4' },
  hotWater: {name: 'Горячая вода', color: '#FF7043'},
  electricity: {name: 'Электричество', color: '#9575CD'}
}
const xFormatter = (i: number): string => `${MonthData[i]?.day}`
const yFormatter = (tick: number, _i?: number, _ticks?: number[]) =>
  tick.toString()
</script>

<template>
  <BarChart
    :data="MonthData"
    :stacked="true"
    :height="300"
    :categories="RevenueCategoriesMultple"
    :y-axis="['heating', 'coldWater', 'hotWater', 'electricity']"
    :group-padding="0"
    :bar-padding="0.2"
    :x-num-ticks="8"
    :radius="4"
    :x-formatter="xFormatter"
    :y-formatter="yFormatter"
    :legend-position="LegendPosition.TopRight"
    :hide-legend="false"
    :y-grid-line="true"
  />
</template>