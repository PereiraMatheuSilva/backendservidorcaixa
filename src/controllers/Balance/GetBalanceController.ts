import { Request, Response } from 'express';
import { GetBalanceService } from '../../services/Balance/GetBalanceService';


class GetBalanceController{
  async handle(req: Request, res: Response){

    const getBalanceService = new GetBalanceService();

    const balance = await getBalanceService.execute();

    return res.json(balance)
  }
}

export {GetBalanceController}