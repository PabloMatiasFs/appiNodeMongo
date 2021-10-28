import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity({name:"user"})
export class User {

    //@PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ name: 'age'})
    age: number;

}