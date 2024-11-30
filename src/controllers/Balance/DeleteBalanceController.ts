import {Response, Request} from 'express';
import { DeleteBalanceService } from '../../services/Balance/DeleteBalanceService';


class DeleteBalanceController{
  async handle(req: Request, res: Response){
    const id = req.body

    const deleteBalance = new DeleteBalanceService();

    const balance = deleteBalance.execute(id);

    return res.json(balance)
  }
}

export { DeleteBalanceController }