import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from "cookie-parser";
import { execSync } from "child_process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  try {
    execSync('npx prisma db push', { stdio: 'inherit' });

    if (process.env.NODE_ENV === 'production') {
      execSync('npm run seed:prod', { stdio: 'inherit' });
    } else {
      execSync('npm run seed', { stdio: 'inherit' });
    }
  } catch (error) {
    console.error('Error running Prisma commands:', error);
  }

  app.use(cookieParser());

  app.enableCors({
    origin: 'http://localhost', // ✅ разрешаем фронтенд
    credentials: true,               // ✅ если потом нужны куки / токены
  });

  const config = app.get(ConfigService);
  const port = config.get<number>('port') || 3000;
  await app.listen(port);
}

bootstrap();
