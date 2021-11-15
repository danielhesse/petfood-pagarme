import { PetShop } from '../../schemas/PetShop';
import { Product } from '../../schemas/Product';

interface IRequest {
  petshop_id: string;
  name: string;
  cover: string;
  price: number;
  rating: number;
}

class CreateProduct {
  async execute({ petshop_id, name, cover, price, rating }: IRequest) {
    const petshopExists = await PetShop.findOne({ _id: petshop_id });

    if (!petshopExists) {
      return new Error('Petshop does not exists!');
    }

    const productExists = await Product.findOne({ name });

    if (productExists) {
      return new Error('Product already exists!');
    }

    const product = await Product.create({
      petshop_id,
      name,
      cover,
      price,
      rating,
    });

    return product;
  }
}

export { CreateProduct };
