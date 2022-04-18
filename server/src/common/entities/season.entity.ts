import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "seasons" })
@ObjectType({ description: "Object representing a season" })
export class Season {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID!)
  id?: string;

  @Column("uuid")
  @Field(() => ID!)
  serieId?: string;

  @Column("int")
  @Field(() => Number)
  seasonNumber?: number;

  @Column("varchar")
  @Field(() => String)
  title?: string;
}
