import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

export enum OrderStatus {
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'

}
export type OrderDocument = Order & mongoose.Document;

@Schema()
export class Order {

  @Prop({ type: Types.ObjectId, ref: 'user', required: true })
  userId!: Types.ObjectId;

  @Prop()
  items!: string[]

  @Prop()
  amount!: number;

  @Prop({ enum: OrderStatus })
  status!: OrderStatus

  @Prop()
  createdAt!:Date
}

export const OrderSchema = SchemaFactory.createForClass(Order);