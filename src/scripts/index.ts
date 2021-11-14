/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

import { PagarmeProvider } from '../providers/PayProvider/implementations/PagarmeProvider';
import { PetShop } from '../schemas/PetShop';
import { Product } from '../schemas/Product';
import petshops from './petfood.json';

mongoose.connect('mongodb://localhost/petfood_marketplace');

async function addPetshopsAndProducts() {
  const pagarmeProvider = new PagarmeProvider();

  try {
    petshops.forEach(async petshop => {
      const recipient = await pagarmeProvider.createRecipient(petshop.name);

      if (recipient) {
        const newPetshop = await new PetShop({
          ...petshop,
          recipient_id: recipient.id,
        }).save();

        await Product.insertMany(
          petshop.products.map(product => ({
            ...product,
            petshop_id: newPetshop._id,
          })),
        );
      } else {
        console.log('error');
      }
    });

    return console.log('Finalized Script!');
  } catch (err: any) {
    return console.log(err);
  }
}

addPetshopsAndProducts();
