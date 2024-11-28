import { Router } from 'express';

import { CreateBankController } from './controllers/Bank/CreateBankController';
import { GetBankController } from './controllers/Bank/GetBankController';
import { DelBankController } from './controllers/Bank/DelBankController';

const router = Router();

// Rotas Bank
router.post('/bank', new CreateBankController().handle);
router.get('/bank', new GetBankController().handle);
router.delete('/bank', new DelBankController().handle);

export { router };
