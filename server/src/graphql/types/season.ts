import { Field, ID, InputType } from "type-graphql";

@InputType({ description: "Season input object type" })
export class Seasoninput {
  @Field(() => ID!)
  serieId?: string;

  @Field(() => String)
  title?: string;
}
