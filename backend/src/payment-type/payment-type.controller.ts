import { Controller, Get, UseGuards } from '@nestjs/common';
import { PaymentTypeService } from './payment-type.service';
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller('payment-type')
export class PaymentTypeController {
  constructor(private readonly paymentTypeService: PaymentTypeService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll() {
    return await this.paymentTypeService.getAll();
  }
}
