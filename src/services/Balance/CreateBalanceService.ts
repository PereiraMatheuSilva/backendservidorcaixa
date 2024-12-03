import prismaClient from '../../prisma';

interface BalanceRequest{
  value: string;
  status: boolean;
  bankId: string;
  obsText: string;
}

class CreateBalanceService{
  async execute({value, status, bankId, obsText}: BalanceRequest){

    const insertBalance = await prismaClient.balance.create({
      data:{
        value: value,
        obsText: obsText,
        status: status,
        bankId: bankId,
      }
    })

    return insertBalance


  }
}

export { CreateBalanceService }