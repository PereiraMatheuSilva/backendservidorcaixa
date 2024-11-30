import prismaClient from '../../prisma';

interface BalanceRequest{
  value: string;
  status: boolean;
  bankId: string;
}

class CreateBalanceService{
  async execute({value, status, bankId}: BalanceRequest){

    const insertBalance = await prismaClient.balance.create({
      data:{
        value: value,
        status: status,
        bankId: bankId
      }
    })

    return insertBalance


  }
}

export { CreateBalanceService }