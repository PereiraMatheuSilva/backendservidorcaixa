import prismaClient from '../../prisma';

class GetTotalService {
  async execute() {
    // Buscando todos os bancos cadastrados
    const banks = await prismaClient.bank.findMany();

    if (!banks || banks.length === 0) {
      throw new Error('Nenhum registro localizado');
    }

    // Mapeando os bancos para objetos contendo id, name e saldo inicial (0)
    const banksIdsAndNames = banks.map(bank => ({
      id: bank.id,
      name: bank.name,
      saldo: 0 // Inicializando o saldo
    }));

    // Buscando todos os saldos dos bancos
    const saldos = await prismaClient.balance.findMany();

    // Para cada banco, vamos calcular o saldo com base nas entradas de saldo
    banksIdsAndNames.forEach(bank => {
      // Filtrando os saldos do banco atual (pelo bankId)
      const bankSaldos = saldos.filter(saldo => saldo.bankId === bank.id);

      const saldoCalculado = bankSaldos.reduce((total, saldo) => {
        // Convertendo saldo.value para número
        const value = parseFloat(saldo.value); // ou +saldo.value para forçar a conversão
        
        // Usando o campo correto 'status' para decidir a operação
        return saldo.status ? total + value : total - value;
      }, 0);

      // Atualizando o saldo do banco no objeto
      bank.saldo = saldoCalculado;
    });

    // Retornando o array de bancos com os saldos calculados
    return banksIdsAndNames;
  }
}

export { GetTotalService };
