import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByPhone(name: string): Category {
    console.log(name);
    return null as any;
  }
  list(): Category[] {
    return null as any;
  }
  create({ name, phone }: ICreateCategoryDTO): void {
    console.log(name, phone);
  }
}

export { PostgresCategoriesRepository };