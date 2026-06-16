import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schema/order.schema';
import { Model } from 'mongoose';


@Injectable()
export class OrderService {
    constructor(
           @InjectModel(Order.name)
            private readonly orderModel: Model<OrderDocument>,
    ) {}

     async create(
        dto: any
      ) {
        return this.orderModel.create({
          ...dto,
        });
      }
}
