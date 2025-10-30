import type { Organization } from '~/entities/organization';
import { api } from './api';

export const organizationService = {
  async getOrganizations(): Promise<Organization[]> {
    const response = await api.get('/api/organizations');
    return response.data.map((org: any) => ({
      id: org.id,
      name: org.name,
      buildingCount: org.building_count,
    }));
  }
};
