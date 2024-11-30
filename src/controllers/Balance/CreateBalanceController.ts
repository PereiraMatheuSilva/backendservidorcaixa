import { Request, Response } from 'express';
import { CreateBalanceService } from '../../services/Balance/CreateBalanceService';

class CreateBalanceController{
  async handle(req: Request, res: Response){
    const {value, status, bankId} = req.body;

    const createBalanceService = new CreateBalanceService();

    const balance = await createBalanceService.execute({
      value, status, bankId
    });

    return res.json(balance)

  }


}

export { CreateBalanceController }