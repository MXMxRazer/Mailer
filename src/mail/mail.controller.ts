import { Controller, Get, Body, Post } from '@nestjs/common'; 
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/dto/user.dto';
import { MailService } from './mail.service';
import requestDTO from 'src/dto/request.dto';

@Controller('/api')
export default class MailController {

    constructor(
        private mailService: MailService,
        private mailerService: MailerService
    ) {}

    @Get('test')
    test() {
        return "Test!"; 
    }

    @Post('/mail')
    sendMail(@Body() user: User): Promise<string> {

        this.mailService.sendUserConfirmation(user); 

        return this.mailService.saveTheInformation(user); 

    }

    @Post('/request')
    sendRequest(@Body() reqUser: requestDTO): Promise<string> {

        return this.mailService.saveRequestInformation(reqUser); 

    }

}