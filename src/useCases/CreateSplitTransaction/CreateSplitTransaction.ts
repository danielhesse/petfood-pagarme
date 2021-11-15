import { ICreateSplitTransactionDTO } from '../../providers/PayProvider/dtos/ICreateSplitTransactionDTO';
import { PagarmeProvider } from '../../providers/PayProvider/implementations/PagarmeProvider';

class CreateSplitTransaction {
  private pagarmeProvider = new PagarmeProvider();

  async execute({ items, customer, payments }: ICreateSplitTransactionDTO) {
    const order = await this.pagarmeProvider.createSplitTransaction({
      items,
      customer,
      payments,
    });

    if (order instanceof Error) {
      return order;
    }

    return order;
  }
}

export { CreateSplitTransaction };
