import type { Organization } from "~/entities/organization";

const mockOrganizations: Organization[] = [
    { id: 1, name: 'МУПВ ВПЭС', buildingCount: 146 },
    { id: 2, name: 'Управляющие организации', buildingCount: 1 },
    { id: 3, name: 'ООО "Дальневосточные Электрические Сети"', buildingCount: 0 },
    { id: 4, name: 'АО "Оборонэнерго"', buildingCount: 0 },
]

export const organizationService = {
  getOrganizations(): Organization[] {
    return mockOrganizations;
  }
};