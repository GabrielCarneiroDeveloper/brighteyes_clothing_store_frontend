import { Employee } from '../employee/employee.models';

interface Clothes {
  id: number;
  name: string;
  price: number;
  photo: string;
  quantityInStock: number;
  status: ClothesStatus;
}

interface ClothesStatus {
  id: number;
  name: string;
}

interface ClothesListDTO extends Omit<Clothes, 'wareHouseEmployees'> {}
interface ClothesDetailsDTO extends Clothes {}
interface ClothesCreateDTO extends Omit<Clothes, 'id' | 'status'> {
  status: number;
}
interface ClothesUpdateDTO extends Omit<Clothes, 'status'> {
  status: number;
}

export {
  Clothes,
  ClothesStatus,
  ClothesListDTO,
  ClothesDetailsDTO,
  ClothesCreateDTO,
  ClothesUpdateDTO,
};
