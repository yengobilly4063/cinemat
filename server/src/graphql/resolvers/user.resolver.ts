import { User } from "../../common/entities";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { UserService } from "../../services";
import { CreateUserInput, LoginUserInput } from "../types/user";
import Context from "../../common/types/context";

@Service()
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async registerUser(@Arg("input") input: CreateUserInput): Promise<User> {
    return this.userService.registerUser(input);
  }

  @Mutation(() => String)
  loginUser(@Arg("input") input: LoginUserInput): Promise<String> {
    return this.userService.loginUser(input);
  }

  @Query(() => User)
  @Authorized()
  me(@Ctx() context: Context): User {
    return context.user;
  }
}
