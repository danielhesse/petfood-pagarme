interface IBankAccount {
  holder_name: string;
  holder_type: 'individual' | 'company';
  holder_document: string;
  bank: string;
  branch_number: string;
  branch_check_digit: string;
  account_number: string;
  account_check_digit: string;
  type: 'checking' | 'savings';
}

interface ITransferSettings {
  transfer_enabled: boolean;
  transfer_interval: 'Daily' | 'Weekly' | 'Monthly';
  transfer_day: number;
}

interface IAnticipationSettings {
  enabled: boolean;
  type: 'individual' | 'company';
  volume_percentage: number;
  delay: null;
}

interface ICreateRecipientDTO {
  name: string;
  email: string;
  description: string;
  document: string;
  type: 'individual' | 'company';
  default_bank_account: IBankAccount;
  transfer_settings: ITransferSettings;
  automatic_anticipation_settings: IAnticipationSettings;
}

export { ICreateRecipientDTO };
