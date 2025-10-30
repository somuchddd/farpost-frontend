<script lang="ts" setup>
interface Props {
  dataService: any;
  title?: string;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  height: 350
});

const data = props.dataService.getData();

const RevenueCategoriesMultiple = {
  heating: { name: 'Отопление', color: '#FF8F00' },
  coldWater: { name: 'Холодная вода', color: '#03A9F4' },
  hotWater: { name: 'Горячая вода', color: '#FF7043' },
  electricity: { name: 'Электричество', color: '#9575CD' }
};

const xFormatter = (i: number): string => {
  const item = data[i];
  if (item?.day) return `${item.day}`;
  if (item?.hour) return `${item.hour}:00`;
  if (item?.date) return `${item.date}`;
  return '';
};

const yFormatter = (tick: number, _i?: number, _ticks?: number[]) =>
  tick.toString();
</script>

<template>
  <div class="graph-container">
    <BarChart
      :data="data"
      :stacked="true"
      :height="height"
      :categories="RevenueCategoriesMultiple"
      :y-axis="['heating', 'coldWater', 'hotWater', 'electricity']"
      :group-padding="0"
      :bar-padding="0.2"
      :x-num-ticks="0"
      :radius="4"
      :x-formatter="xFormatter"
      :y-formatter="yFormatter"
      :legend-position="LegendPosition.TopRight"
      :hide-legend="false"
      :y-grid-line="true"
    />
  </div>
</template>

<style>
</style>