import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './User/user.entity';
import { UserController } from './User/user.controller';
import { AuthController } from './Auth/auth.controller';
import { UserModule } from './User/user.module';
import { AuthModule } from './Auth/auth.Module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from '../Config/typeORM.Config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.get('typeorm');
        return config;
      },
    }),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1h' },
      secret: process.env.JWT_SECRET,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
