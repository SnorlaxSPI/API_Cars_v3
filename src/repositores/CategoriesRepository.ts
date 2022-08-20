import { Category } from '../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

// DTO = Data transfer object

class CategoriesRepository implements ICategoriesRepository {
  
  private categories: Category[];

  constructor() {
    this.categories = []
  }
  
  create({ name, phone }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      phone,
      created_at: new Date()
    });
    
    this.categories.push(category);
  };

  list(): Category[] {
    return this.categories;
  };

  findByPhone(phone: string): Category {
    const category : any = this.categories.find((category) => category.phone === phone);
    return category;
  }
}

export { CategoriesRepository };