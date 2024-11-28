import prismaClient from '../../prisma';

interface BankRequest{
  name: string
}

class CreateBankService{
  async execute({name}: BankRequest){
    
    //Verificar se foi enviado o nome do banco
    if(!name){
      throw new Error("Name Bank Invalid")
    }

    //Verificar se já existe o nome do bank
    const bankAlreadyExists = await prismaClient.bank.findFirst({
      where:{
        name: name
      }
    })

    if(bankAlreadyExists){
      throw new Error("Bank alredy exists")
    }

    const bank = await prismaClient.bank.create({
      data:{
        name: name
      }
    })

    return bank;
  }
}

export { CreateBankService };