export interface OutageMarker {
  id: number;
  coordinates: [number, number]      
  street: string;
  problems: Array<{
    type: 'heat' | 'cold_water' | 'hot_water' | 'electricity';
    description: string;
    ticketNumber?: string;
  }>;
}