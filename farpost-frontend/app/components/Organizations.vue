<template>
    <div class="org">
        <p class="title">
            Организации
        </p>
        <div class="org__list">
            <div
            v-for="org in organizations"
            :key="org.id"
            class="org__list-item"
            >
                <p class="org__list-name">{{ org.name }}</p>
                <p class="org__list-count">{{ org.count }} домов</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const organizations = [
  { id: 1, name: 'МУПВ ВПЭС', count: 146 },
  { id: 2, name: 'Управляющие организации', count: 1 },
  { id: 3, name: 'ООО "Дальневосточные Электрические Сети"', count: 0 },
  { id: 4, name: 'АО "Оборонэнерго"', count: 0 }
]
</script>

<style lang="scss" scoped>
    .org{
        display: flex;
        flex-direction: column;
        gap: 45px;
        &__list{
            display: flex;
            flex-direction: column;
            gap: 40px;
            &-count{
                white-space: nowrap;
            }
            &-item{
                font-family: var(--font);
                font-size: 16px;
                color: #0E4F77;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>