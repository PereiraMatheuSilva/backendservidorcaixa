interface BankRequest{
  name: string
}

class CreateBankService{
  async execute({name}: BankRequest){
    console.log(name)

    return { name: name}
  }
}

export { CreateBankService };