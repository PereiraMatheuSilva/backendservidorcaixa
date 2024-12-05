import { Request, Response } from 'express';
import { GetTotalService } from '../../services/Total/GetTotalService';

class GetTotalController{
  async handle(req: Request, res: Response){

    const getTotalService = new GetTotalService();

    const totalService = await getTotalService.execute();

    
    return res.json(totalService)

  }
}

export { GetTotalController }