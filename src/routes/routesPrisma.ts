import { Router } from 'express';

import { CategoriesRepository } from '../repositores/CategoriesRepository';
import { createCategoryController } from '../modules/useCases/createCategory';
import { listCategoryController } from '../modules/useCases/listCategory';

const routesPrisma = Router();

routesPrisma.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
});

routesPrisma.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

export { routesPrisma };