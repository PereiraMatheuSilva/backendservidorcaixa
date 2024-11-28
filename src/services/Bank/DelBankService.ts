import prismaClient from '../../prisma';

interface BankDel{
  id: number
}

class DelBankService{
  async execute({id}: BankDel){

    const bank = id

    return bank;


  }
}

export { DelBankService }