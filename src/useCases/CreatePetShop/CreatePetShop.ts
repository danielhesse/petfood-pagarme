import { ICreateRecipientDTO } from '../../providers/PayProvider/dtos/ICreateRecipientDTO';
import { PagarmeProvider } from '../../providers/PayProvider/implementations/PagarmeProvider';
import { PetShop } from '../../schemas/PetShop';

interface IPetshop {
  logo: string;
  category: string;
  emphasis: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface IRequest {
  bank_data: ICreateRecipientDTO;
  petshop: IPetshop;
}

class CreatePetShop {
  private pagarmeProvider = new PagarmeProvider();

  async execute({ bank_data, petshop }: IRequest) {
    const petshopEmail = bank_data.email;

    const petshopExists = await PetShop.findOne({ email: petshopEmail });

    if (petshopExists) {
      return new Error('PetShop already exists!');
    }

    const recipient = await this.pagarmeProvider.createRecipient(bank_data);

    if (recipient instanceof Error) {
      return recipient;
    }

    const newPetshop = await PetShop.create({
      recipient_id: recipient.id,
      name: bank_data.name,
      email: bank_data.email,
      ...petshop,
    });

    return newPetshop;
  }
}

export { CreatePetShop };
