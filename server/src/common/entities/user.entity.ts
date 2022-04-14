import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
@ObjectType({ description: "Object representation of a user account" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID!)
  id?: string;

  @Column({ type: "varchar" })
  @Field(() => String)
  name?: string;

  @Column({ type: "varchar" })
  @Field(() => String)
  username?: string;

  @Column({ type: "varchar" })
  password?: string;
}
