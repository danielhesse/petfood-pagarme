import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
  petshop_id: string;
  name: string;
  cover: string;
  price: number;
  rating: number;
}

const ProductSchema = new Schema({
  petshop_id: {
    type: Schema.Types.ObjectId,
    ref: 'PetShops',
  },
  name: String,
  cover: String,
  price: Number,
  rating: Number,
});

export const Product = mongoose.model<IProduct>('Products', ProductSchema);
