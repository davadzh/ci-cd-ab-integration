import { Module } from "@nestjs/common";
import { AuthModule } from './auth/auth.module';
import { FoodModule } from './food/food.module';
import { FoodGroupModule } from './food-group/food-group.module';
import { PaymentTypeModule } from './payment-type/payment-type.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
  }), PrismaModule, AuthModule, FoodModule, FoodGroupModule, PaymentTypeModule, RestaurantModule, OrderModule, CartModule],
  controllers: [],
  providers: [],
})

export class AppModule {}