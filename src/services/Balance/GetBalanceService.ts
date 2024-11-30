import prismaClient from '../../prisma';

class GetBalanceService{
  async execute(){
    const balance = await prismaClient.balance.findMany()

    return balance

  }

}

export { GetBalanceService }