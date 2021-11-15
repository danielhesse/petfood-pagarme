import { Request, Response } from 'express';

import { CreatePetShop } from './CreatePetShop';

class CreatePetShopController {
  async handle(request: Request, response: Response) {
    const { bank_data, petshop } = request.body;

    const createPetShop = new CreatePetShop();

    const result = await createPetShop.execute({
      bank_data,
      petshop,
    });

    if (result instanceof Error) {
      return response.status(400).json({
        error: 'BadRequest',
        message: result.message,
      });
    }

    return response.json(result);
  }
}

export { CreatePetShopController };
