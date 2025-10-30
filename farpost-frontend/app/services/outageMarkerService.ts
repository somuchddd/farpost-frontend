import type { OutageMarker } from '~/entities/outagemarker'

const mockMarkers: OutageMarker[] = [
  {
    id: 1,
    coordinates: [131.916495, 43.125077],
    street: 'проспект Красного Знамени, 90',
    problems: [
      {
        type: 'cold_water',
        description: 'Запуск после проведения ремонтных работ',
        ticketNumber: '№157850'
      },
      {
        type: 'heat',
        description: 'Запуск после проведения ремонтных работ',
        ticketNumber: '№157849'
      }
    ]
  },
  {
    id: 2,
    coordinates: [131.917357, 43.087856],
    street: 'ул. Кипарисовая, 2',
    problems: [
      {
        type: 'electricity',
        description: 'Аварийное отключение',
        ticketNumber: '№157860'
      }
    ]
  },
  {
    id: 3,
    coordinates: [131.913674, 43.095704],
    street: 'улица Лейтенанта Бурачка, 17',
    problems: [
      {
        type: 'hot_water',
        description: 'Плановый ремонт сети',
        ticketNumber: '№157870'
      }
    ]
  },
  {
    id: 4,
    coordinates: [131.897396, 43.097165],
    street: 'улица Надибаидзе, 32',
    problems: [
      {
        type: 'heat',
        description: 'Плановый ремонт сети',
        ticketNumber: '№157834'
      }
    ]
  }
]

export const outageMarkerService = {
  getMarkers(): OutageMarker[] {
    return mockMarkers
  }
}