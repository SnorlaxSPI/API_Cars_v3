import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../model/Category';

const routesPrisma = Router();

const categories: Category[] = [];

routesPrisma.post('/', (request, response) => {
  const { name, phone } = request.body;

  const category = new Category();

  Object.assign(category, {
    name,
    phone,
    created_at: new Date()
  });
  
  categories.push(category);

  return response.status(201).json(categories);
})

export { routesPrisma };