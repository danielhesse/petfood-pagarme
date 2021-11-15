import axios from 'axios';

import { pay } from '../../../config/pay';
import { ICreateRecipientDTO } from '../dtos/ICreateRecipientDTO';
import { ICreateSplitTransactionDTO } from '../dtos/ICreateSplitTransactionDTO';
import { IPayProvider } from '../IPayProvider';

const api = axios.create({
  baseURL: 'https://api.pagar.me/core/v5',
  auth: {
    username: pay.secret_key,
    password: '',
  },
});

class PagarmeProvider implements IPayProvider {
  async createRecipient({
    name,
    email,
    description,
    document,
    type,
    default_bank_account,
    transfer_settings,
    automatic_anticipation_settings,
  }: ICreateRecipientDTO) {
    try {
      const { data } = await api.post('/recipients', {
        name,
        email,
        description,
        document,
        type,
        default_bank_account,
        transfer_settings,
        automatic_anticipation_settings,
      });

      return data;
    } catch (err) {
      return err;
    }
  }

  async listRecipients(page: number, size: number) {
    try {
      const { data } = await api.get(`/recipients?page=${page}&size=${size}`);

      return data;
    } catch (err) {
      return err;
    }
  }

  async createSplitTransaction({
    items,
    customer,
    payments,
  }: ICreateSplitTransactionDTO) {
    try {
      const { data } = await api.post('/orders', {
        items,
        customer,
        payments,
      });

      return data;
    } catch (err) {
      return err;
    }
  }
}

export { PagarmeProvider };
