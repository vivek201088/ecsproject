import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { DatabaseModule } from '@app/database/database.module';
import { EventSchema } from './schema/event.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthModule } from 'libs/common/src/auth/jwt-auth.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: './apps/events/.env',
  }), MongooseModule.forFeature([
    { name: Event.name, schema: EventSchema },
  ]), DatabaseModule,
   JwtAuthModule,],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule { }
