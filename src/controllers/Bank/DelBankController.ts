import { Request, Response } from 'express';
import { DelBankService } from '../../services/Bank/DelBankService';

class DelBankController{
  async handle(req: Request, res: Response){

    const {id} = req.body

    //Verify if id is valid
    if(!id){
      throw new Error(`Erro Interno Del`)
    }

    const delBankService = new DelBankService()

    const bankDelete = delBankService.execute({id})

    return res.json(bankDelete)

  }
}

export { DelBankController }