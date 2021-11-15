import { Request, Response } from 'express';

import { CreateSplitTransaction } from './CreateSplitTransaction';

class CreateSplitTransactionController {
  async handle(request: Request, response: Response) {
    const { items, customer, payments } = request.body;

    const createSplitTransaction = new CreateSplitTransaction();

    const result = await createSplitTransaction.execute({
      items,
      customer,
      payments,
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

export { CreateSplitTransactionController };
