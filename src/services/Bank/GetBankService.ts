import prismaClient from '../../prisma'

class GetBankServer{
  async execute(){
    const bank = await prismaClient.bank.findMany()

    return bank
  }
}

export { GetBankServer }