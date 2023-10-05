import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class requestEntity {

    @PrimaryGeneratedColumn()
    reqId: string; 

    @Column({
        name: 'Requesting User'
    })
    userToRequest: string; 

    @Column({
        name: 'Requesting User Email'
    })
    userToEmail: string; 

    @CreateDateColumn({
        type: 'timestamp', 
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    public requestTimeAt: Date; 

    @UpdateDateColumn({
        type: 'timestamp', 
        default: () => "CURRENT_TIMESTAMP(6)", 
        onUpdate: "CURRENT_TIMESTAMP(6)"
    })
    public requestUpdatedAt: Date; 

}