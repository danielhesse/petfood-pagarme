import { ICreateRecipientDTO } from './dtos/ICreateRecipientDTO';

interface IPayProvider {
  createRecipient(data: ICreateRecipientDTO): Promise<any>;
  listRecipients(page: number, size: number): Promise<any>;
}

export { IPayProvider };
