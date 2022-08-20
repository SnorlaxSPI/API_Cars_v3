import { Router } from 'express';
import { CategoriesRepository } from '../repositores/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const routesPrisma = Router();

const categoriesRepository = new CategoriesRepository();

routesPrisma.post('/', (request, response) => {
  const { name, phone } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, phone });

  return response.status(201).send();
});

routesPrisma.get('/', (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
})

export { routesPrisma };