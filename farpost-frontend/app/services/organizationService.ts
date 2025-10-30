import type { Organization } from '~/entities/organization';
import { api } from './api';

const mockOrganizations: Organization[] = [
    { id: 1, name: 'МУПВ ВПЭС', buildingCount: 146 },
    { id: 2, name: 'Управляющие организации', buildingCount: 1 },
    { id: 3, name: 'ООО "Дальневосточные Электрические Сети"', buildingCount: 0 },
    { id: 4, name: 'АО "Оборонэнерго"', buildingCount: 0 },
]

export const organizationService = {
  async getOrganizations(): Promise<Organization[]> {
    try {
      const response = await api.get('/api/organizations');
      return response.data.map((org: any) => ({
        id: org.id,
        name: org.name,
        buildingCount: org.building_count,
      }));
    } catch (error) {
      return mockOrganizations;
    }
  }
};
