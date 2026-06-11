import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '@app/database/database.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthModule } from 'libs/common/src/auth/jwt-auth.module';
import { JwtStrategy } from 'libs/common/src/auth/strategies/jwt.strategy';
import { User, UserSchema } from './user/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './apps/auth/.env',
    })
    , DatabaseModule, UserModule, JwtAuthModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [UserModule]
})
export class AuthModule { }
