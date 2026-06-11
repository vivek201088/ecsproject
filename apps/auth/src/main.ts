import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const port = process.env.PORT || 5000;
  await app.listen(port, () => {
    console.log(`Auth service is running on port ${port}`);
  });
}
bootstrap();
