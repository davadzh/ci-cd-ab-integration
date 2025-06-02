import { Module } from '@nestjs/common';
import { FoodGroupService } from './food-group.service';
import { FoodGroupController } from './food-group.controller';

@Module({
  controllers: [FoodGroupController],
  providers: [FoodGroupService],
})
export class FoodGroupModule {}
