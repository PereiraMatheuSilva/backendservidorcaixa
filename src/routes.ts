import { Router } from 'express';

import { CreateBankController } from './controllers/Bank/CreateBankController';
import { GetBankController } from './controllers/Bank/GetBankController';

import { CreateBalanceController } from './controllers/Balance/CreateBalanceController';
import { GetBalanceController } from './controllers/Balance/GetBalanceController';
import { DeleteBalanceController } from './controllers/Balance/DeleteBalanceController';


const router = Router();

// Rotas Bank
router.post('/bank', new CreateBankController().handle);
router.get('/bank', new GetBankController().handle);


// Rotas Balance
router.post('/balance', new CreateBalanceController().handle)
router.get('/balance', new GetBalanceController().handle)
router.delete('/balance', new DeleteBalanceController().handle)


export { router };
