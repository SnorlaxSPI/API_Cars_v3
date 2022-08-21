import { Response, Request } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response) {
  
  const { name, phone } = request.body;

  this.createCategoryUseCase.execute({ name, phone });

  return response.status(201).send();
  }
}

export { CreateCategoryController };