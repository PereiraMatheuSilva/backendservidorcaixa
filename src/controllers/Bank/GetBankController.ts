import { Request, Response } from 'express';
import { GetBankServer } from '../../services/Bank/GetBankService';

class GetBankController{
  async handle(req: Request, res: Response){

    const getBankService = new GetBankServer();

    const bank = await getBankService.execute();

    return res.json(bank)
  }
}


export { GetBankController };