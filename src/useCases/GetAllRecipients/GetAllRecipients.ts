import { PagarmeProvider } from '../../providers/PayProvider/implementations/PagarmeProvider';

interface IRequest {
  page: number;
  size: number;
}

class GetAllRecipients {
  private pagarmeProvider = new PagarmeProvider();

  async execute({ page, size }: IRequest) {
    try {
      const recipients = await this.pagarmeProvider.listRecipients(page, size);

      return recipients;
    } catch (err) {
      return err;
    }
  }
}

export { GetAllRecipients };
