import {FiltersEntity} from '../state/filters/filter.model';

export const currentFilters: FiltersEntity[] = [
  {
    id: 1,
    name: 'Sort by',
    icon: 'funnel-outline',
    values: [
      {
        id: 1,
        value: 'Price: Low to high'
      },
      {
        id: 2,
        value: 'Price high to low'
      }
    ]
  },
  {
    id: 2,
    name: 'Number of seats',
    icon: 'Icono',
    values: [
      {
        id: 1,
        value: '4 or more'
      },
      {
        id: 2,
        value: '5 or more'
      },
      {
        id: 3,
        value: '6 or more'
      },
      {
        id: 4,
        value: '7 or more'
      },
      {
        id: 5,
        value: '8 or more'
      },
    ]
  }, {
    id: 3,
    name: 'No smoking',
    icon: 'car-outline',
    values: [
    ]
  },
  {
    id: 4,
    name: 'Vehicle types',
    icon: 'car-outline',
    values: [
      {
        id: 1,
        value: 'Vans'
      },
      {
        id: 2,
        value: 'Luxury'
      },
      {
        id: 3,
        value: 'Convertibles'
      },
      {
        id: 4,
        value: 'Premium y standard'
      },
      {
        id: 5,
        value: 'SUVs'
      },
      {
        id: 6,
        value: 'Midsize  SUV'
      },
      {
        id: 7,
        value: 'Electrical'
      },
      {
        id: 8,
        value: 'Medium compact'
      },
    ]
  },
  {
    id: 5,
    name: 'Price',
    icon: 'Icono',
    values: [

    ]
  }, {
    id: 6,
    name: 'Vehicle Makes',
    icon: 'Icono',
    values: [
      {
        id: 1,
        value: 'texto'
      }
    ]
  },
];
