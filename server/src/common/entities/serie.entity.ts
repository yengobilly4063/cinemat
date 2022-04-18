import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./movie.entity";
import { Season } from "./season.entity";

@Entity({ name: "series" })
@ObjectType({ description: "Object representing a serie" })
export class Serie {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String)
  id?: string;

  @Column("uuid")
  @Field(() => ID!)
  userId?: string;

  @Column("varchar")
  @Field(() => String)
  title?: string;

  @Column("varchar")
  @Field(() => String, { nullable: true })
  description?: string;

  @Column("varchar")
  @Field(() => String, { nullable: true })
  year?: string;

  @Field(() => [Season])
  seasons?: Season[];
}
