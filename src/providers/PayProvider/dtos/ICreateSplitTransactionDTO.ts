interface ICustomer {
  name: string;
  email: string;
  type: 'individual' | 'company';
  document: string;
  phones: {
    mobile_phone: {
      country_code: string;
      area_code: string;
      number: string;
    };
  };
}

interface IItem {
  amount: number;
  description: string;
  quantity: number;
  code: string;
}

interface ICreditCard {
  installments: number;
  statement_descriptor: string;
  card: {
    number: string;
    holder_name: string;
    exp_month: number;
    exp_year: number;
    cvv: string;
    billing_address: {
      line_1: string;
      zip_code: string;
      city: string;
      state: string;
      country: string;
    };
  };
}

interface ISplit {
  amount: number;
  recipient_id: string;
  type: 'percentage' | 'flat';
  options: {
    charge_processing_fee: boolean;
    charge_remainder_fee: boolean;
    liable: boolean;
  };
}

interface IPayment {
  payment_method: 'credit_card' | 'bolet';
  credit_card: ICreditCard;
  split: ISplit[];
}

interface ICreateSplitTransactionDTO {
  items: IItem[];
  customer: ICustomer;
  payments: IPayment[];
}

export { ICreateSplitTransactionDTO };
