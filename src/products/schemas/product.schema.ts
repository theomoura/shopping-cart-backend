import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  sale: {
    name: String,
    id: Number,
  },
});
