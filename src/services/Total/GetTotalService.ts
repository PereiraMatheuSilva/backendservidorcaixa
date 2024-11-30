import prismaClient from '../../prisma';

class GetTotalService{
  async execute(){

    const total = await prismaClient.balance.findMany({
      where: {
        
      }
    })


  }
}

export { GetTotalService }