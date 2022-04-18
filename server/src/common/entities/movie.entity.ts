import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "movies" })
@ObjectType({ description: "Object representation of a movie" })
export class Movie {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID!)
  id?: string;

  @Column("uuid")
  @Field(() => ID!)
  userId?: string;

  @Column({ type: "varchar" })
  @Field(() => String, { nullable: true })
  title?: string;

  @Column({ type: "varchar" })
  @Field(() => String, { nullable: true })
  description?: string;

  @Column({ type: "varchar" })
  @Field(() => String, { nullable: true })
  image?: string;

  @Column({ type: "varchar" })
  @Field(() => String, { nullable: true })
  year?: string;
}
