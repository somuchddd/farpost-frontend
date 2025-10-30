import type { HourDataItem } from "~/entities/hourData";

const mockHour: HourDataItem[] = [
  { minute: '00:00', electricity: 8, heating: 5, hotWater: 3, coldWater: 1 },
  { minute: '00:05', electricity: 7, heating: 4, hotWater: 2, coldWater: 1 },
  { minute: '00:10', electricity: 9, heating: 6, hotWater: 4, coldWater: 2 },
  { minute: '00:15', electricity: 12, heating: 8, hotWater: 6, coldWater: 3 },
  { minute: '00:20', electricity: 15, heating: 10, hotWater: 7, coldWater: 4 },
  { minute: '00:25', electricity: 18, heating: 12, hotWater: 9, coldWater: 5 },
  { minute: '00:30', electricity: 22, heating: 15, hotWater: 11, coldWater: 6 },
  { minute: '00:35', electricity: 25, heating: 18, hotWater: 13, coldWater: 7 },
  { minute: '00:40', electricity: 28, heating: 20, hotWater: 15, coldWater: 8 },
  { minute: '00:45', electricity: 32, heating: 22, hotWater: 17, coldWater: 9 },
  { minute: '00:50', electricity: 35, heating: 25, hotWater: 19, coldWater: 10 },
  { minute: '00:55', electricity: 38, heating: 28, hotWater: 21, coldWater: 11 },
  { minute: '01:00', electricity: 42, heating: 30, hotWater: 23, coldWater: 12 },
  { minute: '01:05', electricity: 38, heating: 28, hotWater: 21, coldWater: 11 },
  { minute: '01:10', electricity: 35, heating: 25, hotWater: 19, coldWater: 10 },
  { minute: '01:15', electricity: 32, heating: 22, hotWater: 17, coldWater: 9 },
  { minute: '01:20', electricity: 28, heating: 20, hotWater: 15, coldWater: 8 },
  { minute: '01:25', electricity: 25, heating: 18, hotWater: 13, coldWater: 7 },
  { minute: '01:30', electricity: 22, heating: 15, hotWater: 11, coldWater: 6 },
  { minute: '01:35', electricity: 18, heating: 12, hotWater: 9, coldWater: 5 },
  { minute: '01:40', electricity: 15, heating: 10, hotWater: 7, coldWater: 4 },
  { minute: '01:45', electricity: 12, heating: 8, hotWater: 6, coldWater: 3 },
  { minute: '01:50', electricity: 9, heating: 6, hotWater: 4, coldWater: 2 },
  { minute: '01:55', electricity: 7, heating: 4, hotWater: 2, coldWater: 1 }
];

export const hourDataService = {
  getData(): HourDataItem[] {
    return mockHour;
  }
};