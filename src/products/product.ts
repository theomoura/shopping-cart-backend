import { Document } from 'mongoose';

export class Product extends Document {
  title: String;
  price: String;
  image: String;
  sale: {
    name: String;
    id: Number;
  };
}
