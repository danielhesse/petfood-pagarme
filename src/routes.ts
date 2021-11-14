import { Router } from 'express';

import { CreateRecipientController } from './useCases/CreatePetShop/CreatePetShopController';
import { GetAllRecipientsController } from './useCases/GetAllRecipients/GetAllRecipientsController';

const routes = Router();

const createRecipientController = new CreateRecipientController();
const getAllRecipientsController = new GetAllRecipientsController();

routes.post('/recipients', createRecipientController.handle);
routes.get('/recipients', getAllRecipientsController.handle);

export { routes };
