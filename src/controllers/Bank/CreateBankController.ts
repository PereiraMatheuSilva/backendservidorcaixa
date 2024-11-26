import { Request, Response } from 'express';
import { CreateBankService } from '../../services/Bank/CreateBankService';

class CreateBankController{
  async handle(req: Request, res: Response){
    const { name } = req.body;

    const createBankService = new CreateBankService();

    const bank = await createBankService.execute({
      name
    });

    return res.json(bank)
  }
}


export { CreateBankController };