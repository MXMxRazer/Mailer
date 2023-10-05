import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from './mail/mail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entities/user.entity';
import UserEntity from './entities/user.entity';
import requestEntity from './entities/request.entity';

@Module({
  imports: [
    MailModule,
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', 
      username: 'postgres', 
      password: '1', 
      port: 5432, 
      database: 'backendfirst', 
      entities: [UserEntity, requestEntity], 
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
