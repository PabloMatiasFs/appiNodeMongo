import { Entity, Column, ObjectIdColumn, ObjectID, BeforeInsert, AfterInsert } from "typeorm";
import bcrypt from 'bcryptjs';

@Entity({name:"user"})
export class User{

    //@PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ name: 'age'})
    age: number;

    @Column({unique: true , nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @BeforeInsert()
    async generatePasswordHash(): Promise<string> {
        console.log('GENERATE');
        return this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    }

}