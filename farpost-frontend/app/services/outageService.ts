import type { OutageSummary } from "~/entities/outageSummary";

const mockOutageSummary: OutageSummary = {
  cold_water: 89,
  hot_water: 210,
  electricity: 452,
  heat: 301
}

export const outageSummaryService = {
    getOutageSummary(): OutageSummary {
        return mockOutageSummary;
    }
}
