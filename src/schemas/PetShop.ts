import mongoose, { Document, Schema } from 'mongoose';

interface IPetShop extends Document {
  name: string;
  email: string;
  logo: string;
  category: string;
  emphasis: string;
  location: {
    latitude: string;
    longitude: string;
  };
  recipient_id: string;
}

const PetShopSchema = new Schema({
  name: String,
  email: String,
  logo: String,
  category: String,
  emphasis: Number,
  location: Object,
  recipient_id: String,
});

export const PetShop = mongoose.model<IPetShop>('PetShops', PetShopSchema);
