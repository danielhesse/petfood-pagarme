import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

export const User = mongoose.model<IUser>('Users', UserSchema);
