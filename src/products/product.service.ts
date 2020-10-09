import { Injectable } from '@nestjs/common';
import { Product } from './product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CacheIntegration } from '../cache/cache.integration';
import { MongoDao } from '../mongo/mongo.dao';
import { ApiIntegration } from '../api/api.integration';

@Injectable()
export class ProductService extends MongoDao<Product, Product> {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private readonly cacheIntegration: CacheIntegration,
    private readonly apiIntegration: ApiIntegration,
  ) {
    super(productModel);
  }

  async getAll() {
    return await this.findAll();
  }

  async getById(id: string) {
    // const cachedItem = await this.cacheIntegration.consumeCache(id);
    return await this.findOne({ _id: id });

    // if (!cachedItem) {
    //   const retrivedItem = await this.findOne({ _id: id });
    //   await this.cacheIntegration.cacheInto(CacheType.redis, id, retrivedItem);
    //   return retrivedItem;
    // }
    // return cachedItem;
  }

  async createProduct(product: Product) {
    return await this.create(product);
  }

  async updateProduct(product: Product) {
    return await this.update(product);
  }

  async delete(id: string) {
    return this.deleteById(id);
  }
}
