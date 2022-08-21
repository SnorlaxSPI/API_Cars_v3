import { Router } from 'express';

import { createCategoryController } from '../modules/useCases/createCategory';
import { listCategoryController } from '../modules/useCases/listCategory';

const routesORM = Router();

routesORM.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
});

routesORM.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

export { routesORM };