import { Category } from '../model/Category';

// DTO = Data transfer object

interface ICreateCategoryDTO {
  name: string;
  phone: string;
}

class CategoriesRepository {
  
  private categories: Category[] = [];//

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

  findByPhone(phone: string): Category | void {
    const category = this.categories.find((category) => category.phone === phone);
    return category;
  }
}

export { CategoriesRepository };