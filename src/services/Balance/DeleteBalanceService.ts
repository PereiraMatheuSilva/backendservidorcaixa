import prismaClient from '../../prisma';

interface DeleteProps{
  id: string
}

class DeleteBalanceService{
  async execute({id}:DeleteProps){

    const deleteBalance = await prismaClient.balance.delete({
      where:{
        id: id
      }
    })

    return deleteBalance
  }
}

export { DeleteBalanceService }