import { Field, InputType } from "type-graphql";

@InputType({ description: "User input type for authenticating a user" })
export class LoginUserInput {
  @Field(() => String)
  username?: string;

  @Field(() => String)
  password?: string;
}

@InputType({ description: "User input type for creating/registering a new user" })
export class CreateUserInput extends LoginUserInput {
  @Field(() => String)
  name?: string;
}
