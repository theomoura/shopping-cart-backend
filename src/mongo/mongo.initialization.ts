import { MongooseModule } from '@nestjs/mongoose';

export function initMongo() {
  return MongooseModule.forRoot(
    'mongodb+srv://admin:<passwd>@cluster0.y7bzx.mongodb.net/shopping-cart?retryWrites=true&w=majority',
  );
}
