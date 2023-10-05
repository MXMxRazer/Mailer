import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import UserEntity from 'src/entities/user.entity';
import requestDTO from 'src/dto/request.dto';
import requestEntity from 'src/entities/request.entity';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    @InjectRepository(UserEntity) 
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(requestEntity)
    private readonly reqRepo: Repository<requestEntity>
    ) {}

  async sendUserConfirmation(user: User): Promise<string> {

    await this.mailerService.sendMail({
      to: 'let.kritan@gmail.com',
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation',
      context: { 
        fromEmail: user.email, 
        name: user.username, 
        url: `https://www.google.com`, 
        message: user.message
      },
    });

    return "success!"; 
  }

  async saveTheInformation(user: User): Promise<string> {

    const userEntity: UserEntity = this.userRepo.create(); 

    const { username, email, message } = user; 

    userEntity.username = username; 
    userEntity.email = email; 
    userEntity.message = message; 

    await this.userRepo.save(userEntity); 

    return "success in saving!"; 

  }

  async saveRequestInformation(reqDTO: requestDTO): Promise<string> {

    const reqEntity: requestEntity = this.reqRepo.create();

    const { reqUser, reqEmail } = reqDTO; 

    reqEntity.userToRequest = reqUser;
    reqEntity.userToEmail = reqEmail;  

    await this.reqRepo.save(reqEntity);

    return "success in retriving the request"; 

  }

}