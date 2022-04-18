import { Field, InputType } from "type-graphql";

@InputType({ description: "Movie input object type" })
export class MovieInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String)
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  year?: string;
}
