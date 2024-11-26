import { Router } from 'express';

import { CreateBankController } from './controllers/Bank/CreateBankController';

const router = Router();

// Rotas Bank
router.post('/bank', new CreateBankController().handle)

export { router };
