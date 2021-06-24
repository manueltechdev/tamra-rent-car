export interface Car {
  id: number;
  name: string;
  rating: number;
  badges: string[];
  price: number;
  tripsQuantity: number;
}


export const car = () => {
  const carsArr: Car[] = [];
  for (let i = 0; i < 30; i++) {
    carsArr.push(
      {
        id: i,
        name: `Car ${i}`,
        price: i * 2,
        tripsQuantity: i * 4,
        rating: 2,
        badges: []
      }
    );
  }
  return carsArr;
};
