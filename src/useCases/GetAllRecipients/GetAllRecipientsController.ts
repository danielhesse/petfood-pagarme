import { Request, Response } from 'express';

import { GetAllRecipients } from './GetAllRecipients';

class GetAllRecipientsController {
  async handle(request: Request, response: Response) {
    const getAllRecipients = new GetAllRecipients();

    const result = await getAllRecipients.execute({
      page: 1,
      size: 10,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

export { GetAllRecipientsController };
