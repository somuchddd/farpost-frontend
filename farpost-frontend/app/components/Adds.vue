<template>
    <div class="add">
        <p>Работа с высоким доходом</p>
        <div class="add__list">
            <NuxtLink
            v-for="add in adds"
            :key="add.id"
            class="add__list-item"
            >
                <p>{{ add.name }}</p>
                <p>{{ add.salary }}</p>
            </NuxtLink>
        </div>
        <NuxtLink to="#" class="add__link">
            <img src="../assets/img/add_arrow.svg" alt="">
            <span>С зарплатой от 100 тыс. рублей</span>
        </NuxtLink>
    </div>
</template>

<script setup>
const adds = [
  { id: 1, name: 'Техник зубной во Владивостоке', salary: 'от 100.000 р.' },
  { id: 2, name: 'Электромонтажник', salary: 'от 100.000 р.' },
  { id: 3, name: 'Разнорабочий', salary: 'от 100.000 р.' }
]
</script>

<style lang="scss" scoped>
    .add{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-size: 16px;
        font-family: var(--font);
        color: #085685;
        gap: 15px;
        &__list{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 15px;
        }
        &__list-item{
            display: flex;
            gap: 5px;
            justify-content: space-between;
            box-sizing: border-box;
            align-items: center;
            border-radius: 25px;
            background-color: #B4DDF4;
            cursor: pointer;
            padding: 16px 14px;
            transition: background-color 0.3s ease-in-out;
            &:hover{
                background-color: #8BCAEE;
            }
        }
        &__link{
            cursor: pointer;
            align-items: center;
            display: flex;
            width: fit-content;
            transition: color 0.3s ease-in-out;
            &:hover{
                color: #03A9F4;
            }
        }
    }

    .add__list-item p:nth-child(2){
        background-color: #F5F5F5;
        border-radius: 13px;
        white-space: nowrap;
        padding: 9px 8px;
    }


</style>