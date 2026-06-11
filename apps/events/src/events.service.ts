import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { EventDocument } from './schema/event.schema';
import { CreateEventDto } from './dto/event.dto';





@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name)
    private readonly eventModel: Model<EventDocument>,
  ) {}

  async create(
    dto: CreateEventDto,
    userId: string,
  ) {
    return this.eventModel.create({
      ...dto,
      createdBy: userId,
    });
  }

  async findAll() {
    return this.eventModel
      .find()
      .sort({ createdAt: -1 });
  }
}