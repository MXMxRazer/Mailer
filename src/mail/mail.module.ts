import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import MailController from './mail.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import UserEntity from 'src/entities/user.entity';
import requestEntity from 'src/entities/request.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, requestEntity]),
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'smtp.sendgrid.net',
        secure: false,
        auth: {
          user: 'apikey',
          pass: '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',
        },
      },
      defaults: {
        from: 'let.kritan@gmail.com',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  controllers: [MailController], 
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}