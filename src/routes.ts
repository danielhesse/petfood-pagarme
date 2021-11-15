import { Router } from 'express';

import { CreatePetShopController } from './useCases/CreatePetShop/CreatePetShopController';
import { CreateProductController } from './useCases/CreateProduct/CreateProductController';
import { CreateSplitTransactionController } from './useCases/CreateSplitTransaction/CreateSplitTransactionController';
import { GetAllRecipientsController } from './useCases/GetAllRecipients/GetAllRecipientsController';

const routes = Router();

const createPetShopController = new CreatePetShopController();
const getAllRecipientsController = new GetAllRecipientsController();
const createProductController = new CreateProductController();
const createSplitTransaction = new CreateSplitTransactionController();

routes.post('/recipients', createPetShopController.handle);
routes.get('/recipients', getAllRecipientsController.handle);
routes.post('/products', createProductController.handle);
routes.post('/transactions', createSplitTransaction.handle);

export { routes };
