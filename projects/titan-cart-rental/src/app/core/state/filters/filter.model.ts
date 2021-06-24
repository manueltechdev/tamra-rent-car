export interface Filter {
  id: number;
  name: string;
  type: 'range' | 'multiple';
  values?: (ValuesEntity | null)[] | null;
  priceRangeSelected?: PriceRangeSelected[];
}
export interface ValuesEntity {
  id: number;
  value: string;
  checked?: boolean;
}

export interface PriceRangeSelected {
  id: number;
  value: number;
}


