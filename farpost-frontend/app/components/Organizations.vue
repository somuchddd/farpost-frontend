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
                <p class="org__list-count">{{ org.buildingCount }} домов</p>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { organizationService } from '~/services/organizationService';
import type { Organization } from '~/entities/organization';

const organizations = ref<Organization[]>([]);

onMounted(async () => {
  try {
    organizations.value = await organizationService.getOrganizations();
  } catch (error) {
    console.error('Ошибка при загрузке организаций:', error);
  }
});

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

    @media(max-width: 600px){
        .org{
            gap: 20px;
            &__list{
                gap: 20px;
            }
        }
    }
</style>
