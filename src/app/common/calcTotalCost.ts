import { Clothes } from './../clothes/clothes.interface';

export function calcTotalCost(clothes: Clothes[]): number {
  let total = 0;
  clothes.forEach((c) => (total += c.price));
  return total;
}
