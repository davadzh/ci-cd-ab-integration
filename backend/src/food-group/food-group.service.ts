import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class FoodGroupService {
  constructor(private readonly prisma: PrismaService) {
  }

  async getByRestaurantId(restaurantId: string) {
    return await this.prisma.foodGroup.findMany({
      where: {
        restaurantId,
      },
      select: {
        id: true,
        name: true,
        foods: {
          select: {
            id: true,
            name: true,
            description: true,
            quantity: true,
            unit: true,
            price: true,
            photoUrl: true,
          }
        }
      }
    })
  }
}
