import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class RestaurantService {
  constructor(private readonly prisma: PrismaService) {
  }

  async getAll() {
    return await this.prisma.restaurant.findMany()
  }
}
