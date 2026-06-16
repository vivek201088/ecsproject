import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get()
    getAllOrders() {
     return []   // Logic to retrieve all orders
    }

    @Post()
    create(
        @Body() dto: any,
      ) {
        return this.orderService.create(
          dto
        );
      }
}
