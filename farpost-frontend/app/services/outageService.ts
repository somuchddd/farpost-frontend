import { api } from './api';
import type { OutageSummary } from '~/entities/outageSummary';

export const outageSummaryService = {
  async getOutageSummary(): Promise<OutageSummary> {
    const response = await api.get('/api/blackouts/stats/hour');

    const data = response.data;
    const types = data.type || {};

    return {
      electricity: types.electric ?? 0,
      cold_water: types.cold_water ?? 0,
      hot_water: types.hot_water ?? 0,
      heat: types.heat ?? 0,
    };
  }
};
