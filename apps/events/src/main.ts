import { NestFactory } from '@nestjs/core';
import { EventsModule } from './events.module';

async function bootstrap() {
  const app = await NestFactory.create(EventsModule);
  const port = process.env.PORT || 5001;
  await app.listen(port, () => {
    console.log(`Events service is running on port ${port}`);
  });
}
bootstrap();
