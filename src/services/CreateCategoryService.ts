import { ICategoriesRepository } from "../repositores/ICategoriesRepository";


interface IRequest {
  name: string;
  phone: string;
}

// Utilizando o Liskov Substitution Principle

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, phone }: IRequest) {
    
    const categoryAlreadyExists = this.categoriesRepository.findByPhone(name);

  if(categoryAlreadyExists) {
    throw new Error("Category Already exists!");
  }
  this.categoriesRepository.create({ name, phone });
  }
}

export { CreateCategoryService };