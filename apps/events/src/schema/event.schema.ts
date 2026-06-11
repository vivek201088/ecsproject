import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  title!: string;

  @Prop()
  description!: string;

  @Prop()
  eventDate!: Date;

  @Prop()
  createdBy!: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);