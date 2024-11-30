import { Request, Response } from 'express';

class GetTotalController{
  async handle(req: Request, res: Response){
    
    return res.json({total: 'total'})

  }
}

export { GetTotalController }