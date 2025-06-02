import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PaymentTypeService {
  constructor(private readonly prisma: PrismaService) {
  }

  async getAll() {
    return await this.prisma.paymentType.findMany()
  }
}
