import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class UserEntity {

    @PrimaryGeneratedColumn()
    Someid: string; 

    @Column()
    username: string; 

    @Column()
    email: string; 

    @Column()
    message: string; 

}
