import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  phone: string;
}

interface ICategoriesRepository {
  findByPhone(name: string): Category;
  list(): Category[];
  create({ name, phone }: ICreateCategoryDTO): void
}

export { ICategoriesRepository, ICreateCategoryDTO };