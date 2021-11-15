import { ICreateRecipientDTO } from './dtos/ICreateRecipientDTO';
import { ICreateSplitTransactionDTO } from './dtos/ICreateSplitTransactionDTO';

interface IPayProvider {
  createRecipient(data: ICreateRecipientDTO): Promise<any>;
  listRecipients(page: number, size: number): Promise<any>;
  createSplitTransaction(data: ICreateSplitTransactionDTO): Promise<any>;
}

export { IPayProvider };
