import { Router } from 'express';
import { CategoriesRepository } from '../repositores/CategoriesRepository';

const routesPrisma = Router();

const categoriesRepository = new CategoriesRepository();

routesPrisma.post('/', (request, response) => {
  const { name, phone } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByPhone(phone);

  if(categoryAlreadyExists) {
    return response.status(400).json({ error: "Category Already exists!"});
  }

 categoriesRepository.create({ name, phone });

  return response.status(201).send();
});

routesPrisma.get('/', (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
})

export { routesPrisma };