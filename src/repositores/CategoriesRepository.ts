import { Category } from '../entities/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

// DTO = Data transfer object

class CategoriesRepository implements ICategoriesRepository {
  
  private categories: Category[];

  // SINGLETON

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = []
  };

  public static getInstance(): CategoriesRepository {
    if(!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  };
  
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