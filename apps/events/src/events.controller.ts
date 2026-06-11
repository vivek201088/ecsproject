import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';

import { EventsService } from './events.service';
import { CreateEventDto } from './dto/event.dto';
import { CurrentUser, JwtAuthGuard } from 'libs/common/src';




@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() dto: CreateEventDto,
    @CurrentUser() user: any,
  ) {
    return this.eventsService.create(
      dto,
      user.userId,
    );
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }
}