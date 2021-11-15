import { Request, Response } from 'express';

import { CreateProduct } from './CreateProduct';

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { petshop_id, name, cover, price, rating } = request.body;

    const createProduct = new CreateProduct();

    const result = await createProduct.execute({
      petshop_id,
      name,
      cover,
      price,
      rating,
    });

    if (result instanceof Error) {
      return response.status(400).json({
        error: 'BadRequest',
        message: result.message,
        details: result,
      });
    }

    return response.json(result);
  }
}

export { CreateProductController };
