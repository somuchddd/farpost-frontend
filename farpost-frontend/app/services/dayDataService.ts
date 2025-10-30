import type { DayDataItem } from "~/entities/dayData";

const mockDay: DayDataItem[] = [
  { hour: '00:00', electricity: 12, heating: 8, hotWater: 6, coldWater: 3 },
  { hour: '01:00', electricity: 10, heating: 7, hotWater: 5, coldWater: 2 },
  { hour: '02:00', electricity: 9, heating: 6, hotWater: 4, coldWater: 2 },
  { hour: '03:00', electricity: 8, heating: 5, hotWater: 3, coldWater: 1 },
  { hour: '04:00', electricity: 7, heating: 4, hotWater: 3, coldWater: 1 },
  { hour: '05:00', electricity: 15, heating: 12, hotWater: 8, coldWater: 4 },
  { hour: '06:00', electricity: 25, heating: 18, hotWater: 12, coldWater: 6 },
  { hour: '07:00', electricity: 35, heating: 25, hotWater: 18, coldWater: 9 },
  { hour: '08:00', electricity: 42, heating: 30, hotWater: 22, coldWater: 11 },
  { hour: '09:00', electricity: 38, heating: 28, hotWater: 20, coldWater: 10 },
  { hour: '10:00', electricity: 32, heating: 24, hotWater: 17, coldWater: 8 },
  { hour: '11:00', electricity: 28, heating: 21, hotWater: 15, coldWater: 7 },
  { hour: '12:00', electricity: 45, heating: 35, hotWater: 25, coldWater: 12 },
  { hour: '13:00', electricity: 48, heating: 38, hotWater: 28, coldWater: 14 },
  { hour: '14:00', electricity: 40, heating: 32, hotWater: 23, coldWater: 11 },
  { hour: '15:00', electricity: 35, heating: 28, hotWater: 20, coldWater: 10 },
  { hour: '16:00', electricity: 52, heating: 42, hotWater: 32, coldWater: 16 },
  { hour: '17:00', electricity: 58, heating: 48, hotWater: 36, coldWater: 18 },
  { hour: '18:00', electricity: 62, heating: 52, hotWater: 40, coldWater: 20 },
  { hour: '19:00', electricity: 55, heating: 45, hotWater: 35, coldWater: 17 },
  { hour: '20:00', electricity: 45, heating: 38, hotWater: 28, coldWater: 14 },
  { hour: '21:00', electricity: 35, heating: 28, hotWater: 22, coldWater: 11 },
  { hour: '22:00', electricity: 25, heating: 18, hotWater: 15, coldWater: 7 },
  { hour: '23:00', electricity: 15, heating: 12, hotWater: 9, coldWater: 4 }
];

export const dayDataService = {
  getData(): DayDataItem[] {
    return mockDay;
  }
};